Vue.component('v-autocompleter', {

    data: function() {
        return {
            googleSearch: "",
            cities: window.cities,
            current: -1,
            filteredCities: [],
            autocompleterIsActive: false,
        }
    },

    watch: {
        /**
         * Funkcja, która filtruje listę miast, zawierających wpisaną frazę
         * @returns lista dziesięciu miast
         */
        googleSearch: function() {
            if (this.autocompleterIsActive)
            {
                return;
            }

            let filtered = this.cities.filter(city => (city.name.includes(this.googleSearch) || city.name.toLowerCase().includes(this.googleSearch)));

            if (this.googleSearch === 0)
            {
                filteredCities = [];
                return;
            } else 
            {
                this.filteredCities = filtered.slice(0,10);
            }
        }
    },

    methods: {
        /**
         * Funkcja służąca do obsługi przejścia do strony wyników
         */
        selectCity: function() {
            this.googleResults = true;
            console.log('comprobando');
        },

        /**
         * Funkcja pogrubiająca fragment nazwy miasta, która nie pokrywa się z wyszukiwaniem
         * @param {nazwa miasta} word 
         * @param {wpisana fraza} query 
         * @returns nazwa miasta z zastosowaniem odpowiedniego formatowania
         */
        highlight: function(word, query) {
            return result = word.replace(query, '<span class="nonhighlighted">' + query + '</span>')
        },

        /**
         * Funkcja pozwalająca na obsługę strzałki w dół
         */
        down: function() {
            if (!this.autocompleterIsActive) {
                this.current = -1;
            }
            if (this.current < this.filteredCities.length)
            {
                this.current++;
            } else if (this.current == this.filteredCities.length)
            {
                this.current = 0;
            }
            this.autocompleterIsActive = true;
            this.googleSearch = this.filteredCities[this.current].name;

        },

        /**
         * Funkcja pozwalająca na obsługę strzałki w górę
         */
        up: function() {
            if (!this.autocompleterIsActive) {
                this.current = -1;
            }
            if(this.current > 0)
            {
                this.current--;
            } else if (this.current < 0)
            {
                this.current = this.filteredCities.length - 1;
            }
            this.autocompleterIsActive = true;
            this.googleSearch = this.filteredCities[this.current].name;
        },

        /**
         * Funkcja sprawiająca, że po skasowaniu wartości w polu input, autocompleter ponownie działa i żadna wartość nie jest podświetlona
         */
        back: function() {
            this.autocompleterIsActive = false;
            this.current = -1;
        },
    },

    props: ['options'],

    template: 
    `
        <div class="search_section">
            <div class="search_area">
                <div class="search_area2">                
                    <div class="text_area1">
                        <div class="text_area2">
                            <input v-model="googleSearch" ref="inputFocus" class="text_input" maxlength="2048" name="q" type="text" aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" autofocus role="combobox" spellcheck="false" title="Szukaj" value aria-label="Szukaj" placeholder="Wpisz wyszukiwaną frazę"
                                v-on:keyup.enter="googleSearch=filteredCities[current].name, $emit('enter')"
                                v-on:keyup.down="down()"
                                v-on:keyup.up="up()"
                                v-on:keyup.delete="back()"                       
                            />
                        </div>
                    </div>                    
                </div>
            </div>
            <ul :class="{nothing: googleSearch.length === 0, autocompleter: googleSearch.length > 0}">
                <li class="element"  :class="{hovered: current === i}" v-for="(city, i) in filteredCities" v-on:click="googleSearch=city.name, $emit('enter')">
                    <span class="highlighted" v-html="highlight(city.name, googleSearch)">{{ city.name }}</span>
                </li>
            </ul>
        </div>
    `
})


Vue.component('v-autocompleter-results', {

    data: function() {
        return {
            googleSearch: "",
            cities: window.cities,
            googleResults: false,
            autocompleterResults: true,
            current: -1,
            currentResults: -1,
            filteredCities: [],
            autocompleterIsActive: false,
        }
    },

    watch: {
        /**
         * Funkcja, która filtruje listę miast, zawierających wpisaną frazę
         * @returns lista dziesięciu miast
         */
        googleSearch: function() {
            if (this.autocompleterIsActive)
            {
                return;
            }

            let filtered = this.cities.filter(city => (city.name.includes(this.googleSearch) || city.name.toLowerCase().includes(this.googleSearch)));

            if (this.googleSearch === 0)
            {
                filteredCities = [];
                return;
            } else 
            {
                this.filteredCities = filtered.slice(0,10);
            }
        }
    },

    methods: {
        /**
         * Funkcja pogrubiająca fragment nazwy miasta, która nie pokrywa się z wyszukiwaniem
         * @param {nazwa miasta} word 
         * @param {wpisana fraza} query 
         * @returns nazwa miasta z zastosowaniem odpowiedniego formatowania
         */
        highlight: function(word, query) {
            return result = word.replace(query, '<span class="nonhighlighted">' + query + '</span>')
        },

        /**
         * Funkcja sprawiająca, że po wyborze wartości, znika lista autocompletera
         */
        selectCityResults: function() {
            this.autocompleterResults = false;
        },

        /**
         * Funkcja sprawiająca, że po kliknięciu pola input rozwija się lista autocompletera
         */
        selectCityResults2: function() {
            this.autocompleterResults = true;
        },

        /**
         * Funkcja pozwalająca na obsługę strzałki w dół
         */
        downResults: function() {
            if (!this.autocompleterIsActive) {
                this.currentResults = -1;
            }
            if (this.currentResults < this.filteredCities.length)
            {
                this.currentResults++;
            } else if (this.currentResults == this.filteredCities.length)
            {
                this.currentResults = 0;
            }
            this.autocompleterIsActive = true;
            this.googleSearch = this.filteredCities[this.currentResults].name;
        },

        /**
         * Funkcja pozwalająca na obsługę strzałki w górę
         */
        upResults: function() {
            if (!this.autocompleterIsActive) {
                this.currentResults = -1;
            }
            if(this.currentResults > 0)
            {
                this.currentResults--;
            } else if (this.currentResults < 0)
            {
                this.currentResults = this.filteredCities.length - 1;
            }
            this.autocompleterIsActive = true;
            this.googleSearch = this.filteredCities[this.currentResults].name;
        },

        /**
         * Funkcja sprawiająca, że po skasowaniu wartości w polu input, autocompleter ponownie działa i żadna wartość nie jest wyróżniona
         */
        backResults: function() {
            this.autocompleterResults = false;
            this.autocompleterIsActive = false;
            this.currentResults = -1;
        }
    },

    props: ['options'],

    template:
    `
            <div class="topbar">
                    <div class="searchbar">
                        <input v-model="googleSearch" ref="inputFocus" class="search_text" type="text" v-on:click="selectCityResults()" placeholder="Wpisz wyszukiwaną frazę"
                        v-on:keyup.enter="selectCityResults2(), googleSearch=filteredCities[currentResults].name"
                        v-on:keyup.down="downResults()"
                        v-on:keyup.up="upResults()" 
                        v-on:keyup.delete="backResults()"                       
                        />
                    </div>
                    <ul :class="{nothing: autocompleterResults == true || googleSearch.length == 0, autocompleter: autocompleterResults == false}">
                        <li class="element" :class="{hovered: currentResults == i}" v-for="(city, i) in filteredCities" v-on:click="googleSearch=city.name; selectCityResults2()">
                            <span class="highlighted" v-html="highlight(city.name, googleSearch)">{{ city.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
    `
})

