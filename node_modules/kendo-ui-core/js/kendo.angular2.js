module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(423);


/***/ },

/***/ 421:
/***/ function(module, exports) {

	module.exports = require("./kendo.core");

/***/ },

/***/ 422:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421), __webpack_require__(424) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	var __meta__ = { // jshint ignore:line
	    id: "angular2",
	    name: "Angular 2",
	    category: "framework",
	    description: "Supports angular2 value accessors",
	    depends: [ "core" ]
	};

	(function (kendo, System) {
	    if (!System || !System.register) {
	        return;
	    }

	    // jshint ignore:start

	    // The code below started as automatically generated from TypeScript. We had to manually fix/change stuff afterwards.
	    // The implementation below is tested against Angular 2 Alpha 36 release
	    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
	            return Reflect.decorate(decorators, target, key, desc);
	        }

	        switch (arguments.length) {
	            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	        }
	    };

	    var __metadata = (this && this.__metadata) || function (k, v) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
	            return Reflect.metadata(k, v);
	        }
	    };

	    System.register('kendo/angular2', ['angular2/angular2'], function(exports_1) {
	        var angular2_1;
	        var KendoValueAccessor;
	        return {
	            setters:[
	                function (_angular2_1) {
	                    angular2_1 = _angular2_1;
	                }],
	            execute: function() {
	                KendoValueAccessor = (function () {
	                    function KendoValueAccessor(cd, elementRef) {
	                        var _this = this;
	                        this.elementRef = elementRef;
	                        this.onChange = function (_) { };
	                        this.onTouched = function () { };
	                        this.element = elementRef.nativeElement;
	                        this.element.addEventListener("change", function () {
	                            _this.onChange(_this.element.value());
	                        });
	                        this.element.addEventListener("spin", function () {
	                            _this.onChange(_this.element.value());
	                        });
	                        cd.valueAccessor = this;
	                        this.cd = cd;
	                        cd.valueAccessor = this;
	                    }
	                    KendoValueAccessor.prototype.writeValue = function (value) {
	                        this.element.value(value);
	                    };
	                    KendoValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	                    KendoValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	                    KendoValueAccessor = __decorate([
	                        angular2_1.Directive({
	                            selector: kendo.webComponents.join(",")
	                        }),
	                        __metadata('design:paramtypes', [angular2_1.NgControl, angular2_1.ElementRef])
	                    ], KendoValueAccessor);
	                    return KendoValueAccessor;
	                })();
	                exports_1("KendoValueAccessor", KendoValueAccessor);
	            }
	        };
	    });

	    // jshint ignore:end
	})(window.kendo, window.System);

	}, __webpack_require__(422));


/***/ },

/***/ 424:
/***/ function(module, exports) {

	module.exports = require("./kendo.webcomponents");

/***/ }

/******/ });