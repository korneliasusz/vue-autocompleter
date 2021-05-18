Vue.component('v-autocompleter', {

    data: function() {
        return {
<<<<<<< HEAD
            //googleSearch: "",
=======
            googleSearch: "",
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
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
<<<<<<< HEAD
        value: function() {
=======
        googleSearch: function() {
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
            if (this.autocompleterIsActive)
            {
                return;
            }

<<<<<<< HEAD
            let filtered = this.cities.filter(city => (city.name.includes(this.value) || city.name.toLowerCase().includes(this.value)));

            if (this.value === 0)
=======
            let filtered = this.cities.filter(city => (city.name.includes(this.googleSearch) || city.name.toLowerCase().includes(this.googleSearch)));

            if (this.googleSearch === 0)
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
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
<<<<<<< HEAD
            this.$emit('enter', this.value);
            console.log(this.value);
=======
            this.googleResults = true;
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
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
<<<<<<< HEAD
            this.value = this.filteredCities[this.current].name;
=======
            this.googleSearch = this.filteredCities[this.current].name;
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2

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
<<<<<<< HEAD
            this.value = this.filteredCities[this.current].name;
=======
            this.googleSearch = this.filteredCities[this.current].name;
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
        },

        /**
         * Funkcja sprawiająca, że po skasowaniu wartości w polu input, autocompleter ponownie działa i żadna wartość nie jest podświetlona
         */
        back: function() {
            this.autocompleterIsActive = false;
            this.current = -1;
        },
<<<<<<< HEAD

        clickSelect: function() {
            this.$emit('enter', this.value);
            console.log(this.value);
            console.log("funciona");
        }
    },

    props: {
        value: {
          type: String,
          default: ""
        }
      },
=======
    },

    props: ['options'],
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2

    template: 
    `
        <div class="search_section">
            <div class="search_area">
                <div class="search_area2">                
                    <div class="text_area1">
                        <div class="text_area2">
<<<<<<< HEAD
                            <input :value="value" ref="inputFocus" class="text_input" maxlength="2048" name="q" type="text" aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" autofocus role="combobox" spellcheck="false" title="Szukaj" value aria-label="Szukaj" placeholder="Wpisz wyszukiwaną frazę"
                                @input="$emit('input', $event.target.value)"
                                v-on:keyup.enter="selectCity(); value=filteredCities[current].name"
=======
                            <input v-model="googleSearch" ref="inputFocus" class="text_input" maxlength="2048" name="q" type="text" aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" autofocus role="combobox" spellcheck="false" title="Szukaj" value aria-label="Szukaj" placeholder="Wpisz wyszukiwaną frazę"
                                v-on:keyup.enter="googleSearch=filteredCities[current].name, $emit('enter')"
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
                                v-on:keyup.down="down()"
                                v-on:keyup.up="up()"
                                v-on:keyup.delete="back()"                       
                            />
                        </div>
                    </div>                    
                </div>
            </div>
<<<<<<< HEAD
            <ul :class="{nothing: value.length === 0, autocompleter: value.length > 0}">
                <li class="element"  :class="{hovered: current === i}" v-for="(city, i) in filteredCities" v-on:click="value=city.name; clickSelect()">
                    <span class="highlighted" v-html="highlight(city.name, value)">{{ city.name }}</span>
=======
            <ul :class="{nothing: googleSearch.length === 0, autocompleter: googleSearch.length > 0}">
                <li class="element"  :class="{hovered: current === i}" v-for="(city, i) in filteredCities" v-on:click="googleSearch=city.name, $emit('enter')">
                    <span class="highlighted" v-html="highlight(city.name, googleSearch)">{{ city.name }}</span>
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
                </li>
            </ul>
        </div>
    `
})


Vue.component('v-autocompleter-results', {

    data: function() {
        return {
<<<<<<< HEAD
            //googleSearch: "",
            cities: window.cities,
            autocompleterResults: true,
=======
            googleSearch: "",
            cities: window.cities,
            googleResults: false,
            autocompleterResults: true,
            current: -1,
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
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
<<<<<<< HEAD
        value: function() {
=======
        googleSearch: function() {
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
            if (this.autocompleterIsActive)
            {
                return;
            }

<<<<<<< HEAD
            let filtered = this.cities.filter(city => (city.name.includes(this.value) || city.name.toLowerCase().includes(this.value)));

            if (this.value === 0)
=======
            let filtered = this.cities.filter(city => (city.name.includes(this.googleSearch) || city.name.toLowerCase().includes(this.googleSearch)));

            if (this.googleSearch === 0)
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
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
<<<<<<< HEAD
            this.value=this.filteredCities[this.currentResults].name
=======
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
        },

        /**
         * Funkcja sprawiająca, że po kliknięciu pola input rozwija się lista autocompletera
         */
        selectCityResults2: function() {
            this.autocompleterResults = true;
<<<<<<< HEAD
            this.value=this.filteredCities[this.currentResults].name
=======
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
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
<<<<<<< HEAD
            this.value = this.filteredCities[this.currentResults].name;
=======
            this.googleSearch = this.filteredCities[this.currentResults].name;
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
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
<<<<<<< HEAD
            this.value = this.filteredCities[this.currentResults].name;
=======
            this.googleSearch = this.filteredCities[this.currentResults].name;
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
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

<<<<<<< HEAD
    props: {
        value: {
          type: String,
        //   default: ""
        }
      },
=======
    props: ['options'],
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2

    template:
    `
            <div class="topbar">
                    <div class="searchbar">
<<<<<<< HEAD
                        <input :value="value" ref="inputFocus" class="search_text" type="text" v-on:click="selectCityResults()" placeholder="Wpisz wyszukiwaną frazę"
                        @input="$emit('input', $event.target.value)"
                        v-on:keyup.enter="selectCityResults2()"
=======
                        <input v-model="googleSearch" ref="inputFocus" class="search_text" type="text" v-on:click="selectCityResults()" placeholder="Wpisz wyszukiwaną frazę"
                        v-on:keyup.enter="selectCityResults2(), googleSearch=filteredCities[currentResults].name"
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
                        v-on:keyup.down="downResults()"
                        v-on:keyup.up="upResults()" 
                        v-on:keyup.delete="backResults()"                       
                        />
                    </div>
<<<<<<< HEAD
                    <ul :class="{nothing: autocompleterResults == true || value.length == 0, autocompleter: autocompleterResults == false}">
                        <li class="element" :class="{hovered: currentResults == i}" v-for="(city, i) in filteredCities" v-on:click="value=city.name; selectCityResults2()">
                            <span class="highlighted" v-html="highlight(city.name, value)">{{ city.name }}</span>
=======
                    <ul :class="{nothing: autocompleterResults == true || googleSearch.length == 0, autocompleter: autocompleterResults == false}">
                        <li class="element" :class="{hovered: currentResults == i}" v-for="(city, i) in filteredCities" v-on:click="googleSearch=city.name; selectCityResults2()">
                            <span class="highlighted" v-html="highlight(city.name, googleSearch)">{{ city.name }}</span>
>>>>>>> 2b6d4c61bb51192edda58ca44258d72a3c1e5bd2
                        </li>
                    </ul>
                </div>
            </div>
    `
})

