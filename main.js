(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pc\Documents\Proyectos\genefa-front\src\main.ts */"zUnb");


/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "3TnI":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "WSaj");
/* harmony import */ var _auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-layout.component.scss */ "FkQd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, modalService) {
        var _this = this;
        this.router = router;
        this.modalService = modalService;
        this.test = new Date();
        this.sidebarColor = "red";
        this.isCollapsed = true;
        this.mobile_menu_visible = 0;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
    }
    AuthLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AuthLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = document.getElementsByClassName('navbar')[0];
        window.addEventListener("resize", this.updateColor);
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
        this.menuItems = _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].filter(function (menuItem) { return menuItem; });
        // on this page, we need on the body tag the classes .rtl and .menu-on-right
        document.body.classList.add("rtl", "menu-on-right");
        // we also need the rtl bootstrap
        // so we add it dynamically to the head
        var head = document.head;
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.id = "rtl-id";
        link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css";
        head.appendChild(link);
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        // when we exit this page, we need to delete the classes .rtl and .menu-on-right
        // from the body tag
        document.body.classList.remove("rtl", "menu-on-right");
        // we also need to delete the rtl bootstrap, so it does not break the other pages
        // that do not make use of rtl
        document.getElementById("rtl-id").remove();
    };
    AuthLayoutComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                //asign a function
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    AuthLayoutComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AuthLayoutComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
    ]; };
    AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-auth-layout',
            template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "78Dz":
/*!*********************************************************************!*\
  !*** ./src/app/components/cliente-form/cliente-form.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "8hWZ":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente-form/cliente-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" row\">\r\n    <div class=\" col-md-12\">\r\n      <div class=\" card\">\r\n        \r\n        <form [formGroup]=\"form\" (ngSubmit)=\"saveForm($event)\">\r\n        <div class=\" card-header\"><h5 class=\" title\">Nuevo cliente</h5></div>\r\n        <div class=\" card-body\">\r\n            <div class=\" row\">\r\n              <div class=\" col-md-3 \">\r\n                <div class=\" form-group\">\r\n                  <label> RFC </label>\r\n                  <input\r\n                    formControlName=\"rfc\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"RFC\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-3 offset-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> CURP </label>\r\n                  <input\r\n                  formControlName=\"curp\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"CURP\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-3 offset-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> NSS </label>\r\n                  <input\r\n                  formControlName=\"nss\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"NSS\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <hr>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-4\">\r\n                <div class=\" form-group\">\r\n                  <label> Nombre </label>\r\n                  <input\r\n                  formControlName=\"nombre\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Nombre\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-4\">\r\n                <div class=\" form-group\">\r\n                  <label> Apaterno </label>\r\n                  <input\r\n                  formControlName=\"apaterno\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Apellido paterno\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-4\">\r\n                <div class=\" form-group\">\r\n                  <label> Amaterno </label>\r\n                  <input\r\n                  formControlName=\"amaterno\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Apellido materno\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-4\">\r\n                <div class=\" form-group\">\r\n                  <label> Email </label>\r\n                  <input\r\n                  formControlName=\"email\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"email\"\r\n                    type=\"email\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <hr>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-4 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Calle </label>\r\n                  <input\r\n                  formControlName=\"calle\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Calle\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-2 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Numero exterior </label>\r\n                  <input\r\n                  formControlName=\"n_ext\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Exterior\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-2 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Numero interior </label>\r\n                  <input\r\n                  formControlName=\"n_int\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Interior\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\" col-md-4 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Colonia </label>\r\n                  <input\r\n                  formControlName=\"colonia\"\r\n                    class=\" form-control\"\r\n                    placeholder=\"Colonia\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-4 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Estado </label>\r\n                  <select \r\n                    class=\"form-control\"\r\n                    id=\"\"\r\n                    formControlName=\"estado\"\r\n                    (change)=\"this.getMunicipios()\">\r\n                    <option *ngFor=\"let item of this.estados\" value=\"{{item}}\">{{item}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-4 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Municipio </label>\r\n                  <select \r\n                  class=\"form-control\"\r\n                  id=\"\"\r\n                  formControlName=\"municipio\">\r\n                  <option *ngFor=\"let item of this.municipios\" value=\"{{item}}\">{{item}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-2 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Codigo postal </label>\r\n                  <input\r\n                    class=\" form-control\"\r\n                    placeholder=\"C.P.\"\r\n                    type=\"text\"\r\n                    formControlName=\"cp\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-2 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> C.R. </label>\r\n                  <input\r\n                    class=\" form-control\"\r\n                    placeholder=\"C.R.\"\r\n                    type=\"text\"\r\n                    formControlName=\"cr\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <hr>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-12\">\r\n                <div class=\" form-group\">\r\n                  <label> Comentarios </label>\r\n                  <textarea\r\n                    class=\" form-control\"\r\n                    cols=\"80\"\r\n                    placeholder=\"Puedes agregar un comentario sobre el nuevo cliente\"\r\n                    rows=\"4\"\r\n                    formControlName=\"comentarios\"\r\n                  ></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class=\" card-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 offset-md-8\">\r\n                <button class=\"form-control btn btn-fill btn-danger\" (click)=\"this.reset()\" type=\"button\">Cancelar</button>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <button class=\"form-control btn btn-fill btn-success\" type=\"submit\">Guardar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      </form>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "ADbd":
/*!*******************************************************************!*\
  !*** ./src/app/components/cliente-form/cliente-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClienteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteFormComponent", function() { return ClienteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cliente_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cliente-form.component.html */ "8hWZ");
/* harmony import */ var _cliente_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-form.component.scss */ "78Dz");
/* harmony import */ var _services_s_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/s-clientes.service */ "ccX7");
/* harmony import */ var _services_s_municipios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/s-municipios.service */ "raJY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









var ClienteFormComponent = /** @class */ (function () {
    function ClienteFormComponent(sMunicipios, formB, sClientes, router) {
        this.sMunicipios = sMunicipios;
        this.formB = formB;
        this.sClientes = sClientes;
        this.router = router;
        this.data = {
            "Aguascalientes": [
                "Aguascalientes",
                "Asientos",
                "Calvillo",
                "Cosío",
                "Jesús María",
                "Pabellón de Arteaga",
                "Rincón de Romos",
                "San José de Gracia",
                "Tepezalá",
                "El Llano",
                "San Francisco de los Romo"
            ],
            "Baja California": [
                "Ensenada",
                "Mexicali",
                "Tecate",
                "Tijuana",
                "Playas de Rosarito"
            ],
            "Baja California Sur": [
                "Comondú",
                "Mulegé",
                "La Paz",
                "Los Cabos",
                "Loreto"
            ],
            "Campeche": [
                "Calkiní",
                "Campeche",
                "Carmen",
                "Champotón",
                "Hecelchakán",
                "Hopelchén",
                "Palizada",
                "Tenabo",
                "Escárcega",
                "Calakmul",
                "Candelaria"
            ],
            "Coahuila de Zaragoza": [
                "Abasolo",
                "Acuña",
                "Allende",
                "Arteaga",
                "Candela",
                "Castaños",
                "Cuatro Ciénegas",
                "Escobedo",
                "Francisco I. Madero",
                "Frontera",
                "General Cepeda",
                "Guerrero",
                "Hidalgo",
                "Jiménez",
                "Juárez",
                "Lamadrid",
                "Matamoros",
                "Monclova",
                "Morelos",
                "Múzquiz",
                "Nadadores",
                "Nava",
                "Ocampo",
                "Parras",
                "Piedras Negras",
                "Progreso",
                "Ramos Arizpe",
                "Sabinas",
                "Sacramento",
                "Saltillo",
                "San Buenaventura",
                "San Juan de Sabinas",
                "San Pedro",
                "Sierra Mojada",
                "Torreón",
                "Viesca",
                "Villa Unión",
                "Zaragoza"
            ],
            "Colima": [
                "Armería",
                "Colima",
                "Comala",
                "Coquimatlán",
                "Cuauhtémoc",
                "Ixtlahuacán",
                "Manzanillo",
                "Minatitlán",
                "Tecomán",
                "Villa de Álvarez"
            ],
            "Chiapas": [
                "Acacoyagua",
                "Acala",
                "Acapetahua",
                "Altamirano",
                "Amatán",
                "Amatenango de la Frontera",
                "Amatenango del Valle",
                "Angel Albino Corzo",
                "Arriaga",
                "Bejucal de Ocampo",
                "Bella Vista",
                "Berriozábal",
                "Bochil",
                "El Bosque",
                "Cacahoatán",
                "Catazajá",
                "Cintalapa",
                "Coapilla",
                "Comitán de Domínguez",
                "La Concordia",
                "Copainalá",
                "Chalchihuitán",
                "Chamula",
                "Chanal",
                "Chapultenango",
                "Chenalhó",
                "Chiapa de Corzo",
                "Chiapilla",
                "Chicoasén",
                "Chicomuselo",
                "Chilón",
                "Escuintla",
                "Francisco León",
                "Frontera Comalapa",
                "Frontera Hidalgo",
                "La Grandeza",
                "Huehuetán",
                "Huixtán",
                "Huitiupán",
                "Huixtla",
                "La Independencia",
                "Ixhuatán",
                "Ixtacomitán",
                "Ixtapa",
                "Ixtapangajoya",
                "Jiquipilas",
                "Jitotol",
                "Juárez",
                "Larráinzar",
                "La Libertad",
                "Mapastepec",
                "Las Margaritas",
                "Mazapa de Madero",
                "Mazatán",
                "Metapa",
                "Mitontic",
                "Motozintla",
                "Nicolás Ruíz",
                "Ocosingo",
                "Ocotepec",
                "Ocozocoautla de Espinosa",
                "Ostuacán",
                "Osumacinta",
                "Oxchuc",
                "Palenque",
                "Pantelhó",
                "Pantepec",
                "Pichucalco",
                "Pijijiapan",
                "El Porvenir",
                "Villa Comaltitlán",
                "Pueblo Nuevo Solistahuacán",
                "Rayón",
                "Reforma",
                "Las Rosas",
                "Sabanilla",
                "Salto de Agua",
                "San Cristóbal de las Casas",
                "San Fernando",
                "Siltepec",
                "Simojovel",
                "Sitalá",
                "Socoltenango",
                "Solosuchiapa",
                "Soyaló",
                "Suchiapa",
                "Suchiate",
                "Sunuapa",
                "Tapachula",
                "Tapalapa",
                "Tapilula",
                "Tecpatán",
                "Tenejapa",
                "Teopisca",
                "Tila",
                "Tonalá",
                "Totolapa",
                "La Trinitaria",
                "Tumbalá",
                "Tuxtla Gutiérrez",
                "Tuxtla Chico",
                "Tuzantán",
                "Tzimol",
                "Unión Juárez",
                "Venustiano Carranza",
                "Villa Corzo",
                "Villaflores",
                "Yajalón",
                "San Lucas",
                "Zinacantán",
                "San Juan Cancuc",
                "Aldama",
                "Benemérito de las Américas",
                "Maravilla Tenejapa",
                "Marqués de Comillas",
                "Montecristo de Guerrero",
                "San Andrés Duraznal",
                "Santiago el Pinar",
                "Capitán Luis Ángel Vidal",
                "Rincón Chamula San Pedro",
                "El Parral",
                "Emiliano Zapata",
                "Mezcalapa"
            ],
            "Chihuahua": [
                "Ahumada",
                "Aldama",
                "Allende",
                "Aquiles Serdán",
                "Ascensión",
                "Bachíniva",
                "Balleza",
                "Batopilas de Manuel Gómez Morín",
                "Bocoyna",
                "Buenaventura",
                "Camargo",
                "Carichí",
                "Casas Grandes",
                "Coronado",
                "Coyame del Sotol",
                "La Cruz",
                "Cuauhtémoc",
                "Cusihuiriachi",
                "Chihuahua",
                "Chínipas",
                "Delicias",
                "Dr. Belisario Domínguez",
                "Galeana",
                "Santa Isabel",
                "Gómez Farías",
                "Gran Morelos",
                "Guachochi",
                "Guadalupe",
                "Guadalupe y Calvo",
                "Guazapares",
                "Guerrero",
                "Hidalgo del Parral",
                "Huejotitán",
                "Ignacio Zaragoza",
                "Janos",
                "Jiménez",
                "Juárez",
                "Julimes",
                "López",
                "Madera",
                "Maguarichi",
                "Manuel Benavides",
                "Matachí",
                "Matamoros",
                "Meoqui",
                "Morelos",
                "Moris",
                "Namiquipa",
                "Nonoava",
                "Nuevo Casas Grandes",
                "Ocampo",
                "Ojinaga",
                "Praxedis G. Guerrero",
                "Riva Palacio",
                "Rosales",
                "Rosario",
                "San Francisco de Borja",
                "San Francisco de Conchos",
                "San Francisco del Oro",
                "Santa Bárbara",
                "Satevó",
                "Saucillo",
                "Temósachic",
                "El Tule",
                "Urique",
                "Uruachi",
                "Valle de Zaragoza"
            ],
            "Ciudad de México": [
                "Azcapotzalco",
                "Coyoacán",
                "Cuajimalpa de Morelos",
                "Gustavo A. Madero",
                "Iztacalco",
                "Iztapalapa",
                "La Magdalena Contreras",
                "Milpa Alta",
                "Álvaro Obregón",
                "Tláhuac",
                "Tlalpan",
                "Xochimilco",
                "Benito Juárez",
                "Cuauhtémoc",
                "Miguel Hidalgo",
                "Venustiano Carranza"
            ],
            "Durango": [
                "Canatlán",
                "Canelas",
                "Coneto de Comonfort",
                "Cuencamé",
                "Durango",
                "General Simón Bolívar",
                "Gómez Palacio",
                "Guadalupe Victoria",
                "Guanaceví",
                "Hidalgo",
                "Indé",
                "Lerdo",
                "Mapimí",
                "Mezquital",
                "Nazas",
                "Nombre de Dios",
                "Ocampo",
                "El Oro",
                "Otáez",
                "Pánuco de Coronado",
                "Peñón Blanco",
                "Poanas",
                "Pueblo Nuevo",
                "Rodeo",
                "San Bernardo",
                "San Dimas",
                "San Juan de Guadalupe",
                "San Juan del Río",
                "San Luis del Cordero",
                "San Pedro del Gallo",
                "Santa Clara",
                "Santiago Papasquiaro",
                "Súchil",
                "Tamazula",
                "Tepehuanes",
                "Tlahualilo",
                "Topia",
                "Vicente Guerrero",
                "Nuevo Ideal"
            ],
            "Guanajuato": [
                "Abasolo",
                "Acámbaro",
                "San Miguel de Allende",
                "Apaseo el Alto",
                "Apaseo el Grande",
                "Atarjea",
                "Celaya",
                "Manuel Doblado",
                "Comonfort",
                "Coroneo",
                "Cortazar",
                "Cuerámaro",
                "Doctor Mora",
                "Dolores Hidalgo Cuna de la Independencia Nacional",
                "Guanajuato",
                "Huanímaro",
                "Irapuato",
                "Jaral del Progreso",
                "Jerécuaro",
                "León",
                "Moroleón",
                "Ocampo",
                "Pénjamo",
                "Pueblo Nuevo",
                "Purísima del Rincón",
                "Romita",
                "Salamanca",
                "Salvatierra",
                "San Diego de la Unión",
                "San Felipe",
                "San Francisco del Rincón",
                "San José Iturbide",
                "San Luis de la Paz",
                "Santa Catarina",
                "Santa Cruz de Juventino Rosas",
                "Santiago Maravatío",
                "Silao de la Victoria",
                "Tarandacuao",
                "Tarimoro",
                "Tierra Blanca",
                "Uriangato",
                "Valle de Santiago",
                "Victoria",
                "Villagrán",
                "Xichú",
                "Yuriria"
            ],
            "Guerrero": [
                "Acapulco de Juárez",
                "Ahuacuotzingo",
                "Ajuchitlán del Progreso",
                "Alcozauca de Guerrero",
                "Alpoyeca",
                "Apaxtla",
                "Arcelia",
                "Atenango del Río",
                "Atlamajalcingo del Monte",
                "Atlixtac",
                "Atoyac de Álvarez",
                "Ayutla de los Libres",
                "Azoyú",
                "Benito Juárez",
                "Buenavista de Cuéllar",
                "Coahuayutla de José María Izazaga",
                "Cocula",
                "Copala",
                "Copalillo",
                "Copanatoyac",
                "Coyuca de Benítez",
                "Coyuca de Catalán",
                "Cuajinicuilapa",
                "Cualác",
                "Cuautepec",
                "Cuetzala del Progreso",
                "Cutzamala de Pinzón",
                "Chilapa de Álvarez",
                "Chilpancingo de los Bravo",
                "Florencio Villarreal",
                "General Canuto A. Neri",
                "General Heliodoro Castillo",
                "Huamuxtitlán",
                "Huitzuco de los Figueroa",
                "Iguala de la Independencia",
                "Igualapa",
                "Ixcateopan de Cuauhtémoc",
                "Zihuatanejo de Azueta",
                "Juan R. Escudero",
                "Leonardo Bravo",
                "Malinaltepec",
                "Mártir de Cuilapan",
                "Metlatónoc",
                "Mochitlán",
                "Olinalá",
                "Ometepec",
                "Pedro Ascencio Alquisiras",
                "Petatlán",
                "Pilcaya",
                "Pungarabato",
                "Quechultenango",
                "San Luis Acatlán",
                "San Marcos",
                "San Miguel Totolapan",
                "Taxco de Alarcón",
                "Tecoanapa",
                "Técpan de Galeana",
                "Teloloapan",
                "Tepecoacuilco de Trujano",
                "Tetipac",
                "Tixtla de Guerrero",
                "Tlacoachistlahuaca",
                "Tlacoapa",
                "Tlalchapa",
                "Tlalixtaquilla de Maldonado",
                "Tlapa de Comonfort",
                "Tlapehuala",
                "La Unión de Isidoro Montes de Oca",
                "Xalpatláhuac",
                "Xochihuehuetlán",
                "Xochistlahuaca",
                "Zapotitlán Tablas",
                "Zirándaro",
                "Zitlala",
                "Eduardo Neri",
                "Acatepec",
                "Marquelia",
                "Cochoapa el Grande",
                "José Joaquín de Herrera",
                "Juchitán",
                "Iliatenco"
            ],
            "Hidalgo": [
                "Acatlán",
                "Acaxochitlán",
                "Actopan",
                "Agua Blanca de Iturbide",
                "Ajacuba",
                "Alfajayucan",
                "Almoloya",
                "Apan",
                "El Arenal",
                "Atitalaquia",
                "Atlapexco",
                "Atotonilco el Grande",
                "Atotonilco de Tula",
                "Calnali",
                "Cardonal",
                "Cuautepec de Hinojosa",
                "Chapantongo",
                "Chapulhuacán",
                "Chilcuautla",
                "Eloxochitlán",
                "Emiliano Zapata",
                "Epazoyucan",
                "Francisco I. Madero",
                "Huasca de Ocampo",
                "Huautla",
                "Huazalingo",
                "Huehuetla",
                "Huejutla de Reyes",
                "Huichapan",
                "Ixmiquilpan",
                "Jacala de Ledezma",
                "Jaltocán",
                "Juárez Hidalgo",
                "Lolotla",
                "Metepec",
                "San Agustín Metzquititlán",
                "Metztitlán",
                "Mineral del Chico",
                "Mineral del Monte",
                "La Misión",
                "Mixquiahuala de Juárez",
                "Molango de Escamilla",
                "Nicolás Flores",
                "Nopala de Villagrán",
                "Omitlán de Juárez",
                "San Felipe Orizatlán",
                "Pacula",
                "Pachuca de Soto",
                "Pisaflores",
                "Progreso de Obregón",
                "Mineral de la Reforma",
                "San Agustín Tlaxiaca",
                "San Bartolo Tutotepec",
                "San Salvador",
                "Santiago de Anaya",
                "Santiago Tulantepec de Lugo Guerrero",
                "Singuilucan",
                "Tasquillo",
                "Tecozautla",
                "Tenango de Doria",
                "Tepeapulco",
                "Tepehuacán de Guerrero",
                "Tepeji del Río de Ocampo",
                "Tepetitlán",
                "Tetepango",
                "Villa de Tezontepec",
                "Tezontepec de Aldama",
                "Tianguistengo",
                "Tizayuca",
                "Tlahuelilpan",
                "Tlahuiltepa",
                "Tlanalapa",
                "Tlanchinol",
                "Tlaxcoapan",
                "Tolcayuca",
                "Tula de Allende",
                "Tulancingo de Bravo",
                "Xochiatipan",
                "Xochicoatlán",
                "Yahualica",
                "Zacualtipán de Ángeles",
                "Zapotlán de Juárez",
                "Zempoala",
                "Zimapán"
            ],
            "Jalisco": [
                "Acatic",
                "Acatlán de Juárez",
                "Ahualulco de Mercado",
                "Amacueca",
                "Amatitán",
                "Ameca",
                "San Juanito de Escobedo",
                "Arandas",
                "El Arenal",
                "Atemajac de Brizuela",
                "Atengo",
                "Atenguillo",
                "Atotonilco el Alto",
                "Atoyac",
                "Autlán de Navarro",
                "Ayotlán",
                "Ayutla",
                "La Barca",
                "Bolaños",
                "Cabo Corrientes",
                "Casimiro Castillo",
                "Cihuatlán",
                "Zapotlán el Grande",
                "Cocula",
                "Colotlán",
                "Concepción de Buenos Aires",
                "Cuautitlán de García Barragán",
                "Cuautla",
                "Cuquío",
                "Chapala",
                "Chimaltitán",
                "Chiquilistlán",
                "Degollado",
                "Ejutla",
                "Encarnación de Díaz",
                "Etzatlán",
                "El Grullo",
                "Guachinango",
                "Guadalajara",
                "Hostotipaquillo",
                "Huejúcar",
                "Huejuquilla el Alto",
                "La Huerta",
                "Ixtlahuacán de los Membrillos",
                "Ixtlahuacán del Río",
                "Jalostotitlán",
                "Jamay",
                "Jesús María",
                "Jilotlán de los Dolores",
                "Jocotepec",
                "Juanacatlán",
                "Juchitlán",
                "Lagos de Moreno",
                "El Limón",
                "Magdalena",
                "Santa María del Oro",
                "La Manzanilla de la Paz",
                "Mascota",
                "Mazamitla",
                "Mexticacán",
                "Mezquitic",
                "Mixtlán",
                "Ocotlán",
                "Ojuelos de Jalisco",
                "Pihuamo",
                "Poncitlán",
                "Puerto Vallarta",
                "Villa Purificación",
                "Quitupan",
                "El Salto",
                "San Cristóbal de la Barranca",
                "San Diego de Alejandría",
                "San Juan de los Lagos",
                "San Julián",
                "San Marcos",
                "San Martín de Bolaños",
                "San Martín Hidalgo",
                "San Miguel el Alto",
                "Gómez Farías",
                "San Sebastián del Oeste",
                "Santa María de los Ángeles",
                "Sayula",
                "Tala",
                "Talpa de Allende",
                "Tamazula de Gordiano",
                "Tapalpa",
                "Tecalitlán",
                "Tecolotlán",
                "Techaluta de Montenegro",
                "Tenamaxtlán",
                "Teocaltiche",
                "Teocuitatlán de Corona",
                "Tepatitlán de Morelos",
                "Tequila",
                "Teuchitlán",
                "Tizapán el Alto",
                "Tlajomulco de Zúñiga",
                "San Pedro Tlaquepaque",
                "Tolimán",
                "Tomatlán",
                "Tonalá",
                "Tonaya",
                "Tonila",
                "Totatiche",
                "Tototlán",
                "Tuxcacuesco",
                "Tuxcueca",
                "Tuxpan",
                "Unión de San Antonio",
                "Unión de Tula",
                "Valle de Guadalupe",
                "Valle de Juárez",
                "San Gabriel",
                "Villa Corona",
                "Villa Guerrero",
                "Villa Hidalgo",
                "Cañadas de Obregón",
                "Yahualica de González Gallo",
                "Zacoalco de Torres",
                "Zapopan",
                "Zapotiltic",
                "Zapotitlán de Vadillo",
                "Zapotlán del Rey",
                "Zapotlanejo",
                "San Ignacio Cerro Gordo"
            ],
            "México": [
                "Acambay de Ruíz Castañeda",
                "Acolman",
                "Aculco",
                "Almoloya de Alquisiras",
                "Almoloya de Juárez",
                "Almoloya del Río",
                "Amanalco",
                "Amatepec",
                "Amecameca",
                "Apaxco",
                "Atenco",
                "Atizapán",
                "Atizapán de Zaragoza",
                "Atlacomulco",
                "Atlautla",
                "Axapusco",
                "Ayapango",
                "Calimaya",
                "Capulhuac",
                "Coacalco de Berriozábal",
                "Coatepec Harinas",
                "Cocotitlán",
                "Coyotepec",
                "Cuautitlán",
                "Chalco",
                "Chapa de Mota",
                "Chapultepec",
                "Chiautla",
                "Chicoloapan",
                "Chiconcuac",
                "Chimalhuacán",
                "Donato Guerra",
                "Ecatepec de Morelos",
                "Ecatzingo",
                "Huehuetoca",
                "Hueypoxtla",
                "Huixquilucan",
                "Isidro Fabela",
                "Ixtapaluca",
                "Ixtapan de la Sal",
                "Ixtapan del Oro",
                "Ixtlahuaca",
                "Xalatlaco",
                "Jaltenco",
                "Jilotepec",
                "Jilotzingo",
                "Jiquipilco",
                "Jocotitlán",
                "Joquicingo",
                "Juchitepec",
                "Lerma",
                "Malinalco",
                "Melchor Ocampo",
                "Metepec",
                "Mexicaltzingo",
                "Morelos",
                "Naucalpan de Juárez",
                "Nezahualcóyotl",
                "Nextlalpan",
                "Nicolás Romero",
                "Nopaltepec",
                "Ocoyoacac",
                "Ocuilan",
                "El Oro",
                "Otumba",
                "Otzoloapan",
                "Otzolotepec",
                "Ozumba",
                "Papalotla",
                "La Paz",
                "Polotitlán",
                "Rayón",
                "San Antonio la Isla",
                "San Felipe del Progreso",
                "San Martín de las Pirámides",
                "San Mateo Atenco",
                "San Simón de Guerrero",
                "Santo Tomás",
                "Soyaniquilpan de Juárez",
                "Sultepec",
                "Tecámac",
                "Tejupilco",
                "Temamatla",
                "Temascalapa",
                "Temascalcingo",
                "Temascaltepec",
                "Temoaya",
                "Tenancingo",
                "Tenango del Aire",
                "Tenango del Valle",
                "Teoloyucan",
                "Teotihuacán",
                "Tepetlaoxtoc",
                "Tepetlixpa",
                "Tepotzotlán",
                "Tequixquiac",
                "Texcaltitlán",
                "Texcalyacac",
                "Texcoco",
                "Tezoyuca",
                "Tianguistenco",
                "Timilpan",
                "Tlalmanalco",
                "Tlalnepantla de Baz",
                "Tlatlaya",
                "Toluca",
                "Tonatico",
                "Tultepec",
                "Tultitlán",
                "Valle de Bravo",
                "Villa de Allende",
                "Villa del Carbón",
                "Villa Guerrero",
                "Villa Victoria",
                "Xonacatlán",
                "Zacazonapan",
                "Zacualpan",
                "Zinacantepec",
                "Zumpahuacán",
                "Zumpango",
                "Cuautitlán Izcalli",
                "Valle de Chalco Solidaridad",
                "Luvianos",
                "San José del Rincón",
                "Tonanitla"
            ],
            "Michoacán de Ocampo": [
                "Acuitzio",
                "Aguililla",
                "Álvaro Obregón",
                "Angamacutiro",
                "Angangueo",
                "Apatzingán",
                "Aporo",
                "Aquila",
                "Ario",
                "Arteaga",
                "Briseñas",
                "Buenavista",
                "Carácuaro",
                "Coahuayana",
                "Coalcomán de Vázquez Pallares",
                "Coeneo",
                "Contepec",
                "Copándaro",
                "Cotija",
                "Cuitzeo",
                "Charapan",
                "Charo",
                "Chavinda",
                "Cherán",
                "Chilchota",
                "Chinicuila",
                "Chucándiro",
                "Churintzio",
                "Churumuco",
                "Ecuandureo",
                "Epitacio Huerta",
                "Erongarícuaro",
                "Gabriel Zamora",
                "Hidalgo",
                "La Huacana",
                "Huandacareo",
                "Huaniqueo",
                "Huetamo",
                "Huiramba",
                "Indaparapeo",
                "Irimbo",
                "Ixtlán",
                "Jacona",
                "Jiménez",
                "Jiquilpan",
                "Juárez",
                "Jungapeo",
                "Lagunillas",
                "Madero",
                "Maravatío",
                "Marcos Castellanos",
                "Lázaro Cárdenas",
                "Morelia",
                "Morelos",
                "Múgica",
                "Nahuatzen",
                "Nocupétaro",
                "Nuevo Parangaricutiro",
                "Nuevo Urecho",
                "Numarán",
                "Ocampo",
                "Pajacuarán",
                "Panindícuaro",
                "Parácuaro",
                "Paracho",
                "Pátzcuaro",
                "Penjamillo",
                "Peribán",
                "La Piedad",
                "Purépero",
                "Puruándiro",
                "Queréndaro",
                "Quiroga",
                "Cojumatlán de Régules",
                "Los Reyes",
                "Sahuayo",
                "San Lucas",
                "Santa Ana Maya",
                "Salvador Escalante",
                "Senguio",
                "Susupuato",
                "Tacámbaro",
                "Tancítaro",
                "Tangamandapio",
                "Tangancícuaro",
                "Tanhuato",
                "Taretan",
                "Tarímbaro",
                "Tepalcatepec",
                "Tingambato",
                "Tingüindín",
                "Tiquicheo de Nicolás Romero",
                "Tlalpujahua",
                "Tlazazalca",
                "Tocumbo",
                "Tumbiscatío",
                "Turicato",
                "Tuxpan",
                "Tuzantla",
                "Tzintzuntzan",
                "Tzitzio",
                "Uruapan",
                "Venustiano Carranza",
                "Villamar",
                "Vista Hermosa",
                "Yurécuaro",
                "Zacapu",
                "Zamora",
                "Zináparo",
                "Zinapécuaro",
                "Ziracuaretiro",
                "Zitácuaro",
                "José Sixto Verduzco"
            ],
            "Morelos": [
                "Amacuzac",
                "Atlatlahucan",
                "Axochiapan",
                "Ayala",
                "Coatlán del Río",
                "Cuautla",
                "Cuernavaca",
                "Emiliano Zapata",
                "Huitzilac",
                "Jantetelco",
                "Jiutepec",
                "Jojutla",
                "Jonacatepec de Leandro Valle",
                "Mazatepec",
                "Miacatlán",
                "Ocuituco",
                "Puente de Ixtla",
                "Temixco",
                "Tepalcingo",
                "Tepoztlán",
                "Tetecala",
                "Tetela del Volcán",
                "Tlalnepantla",
                "Tlaltizapán de Zapata",
                "Tlaquiltenango",
                "Tlayacapan",
                "Totolapan",
                "Xochitepec",
                "Yautepec",
                "Yecapixtla",
                "Zacatepec",
                "Zacualpan de Amilpas",
                "Temoac"
            ],
            "Nayarit": [
                "Acaponeta",
                "Ahuacatlán",
                "Amatlán de Cañas",
                "Compostela",
                "Huajicori",
                "Ixtlán del Río",
                "Jala",
                "Xalisco",
                "Del Nayar",
                "Rosamorada",
                "Ruíz",
                "San Blas",
                "San Pedro Lagunillas",
                "Santa María del Oro",
                "Santiago Ixcuintla",
                "Tecuala",
                "Tepic",
                "Tuxpan",
                "La Yesca",
                "Bahía de Banderas"
            ],
            "Nuevo León": [
                "Abasolo",
                "Agualeguas",
                "Los Aldamas",
                "Allende",
                "Anáhuac",
                "Apodaca",
                "Aramberri",
                "Bustamante",
                "Cadereyta Jiménez",
                "El Carmen",
                "Cerralvo",
                "Ciénega de Flores",
                "China",
                "Doctor Arroyo",
                "Doctor Coss",
                "Doctor González",
                "Galeana",
                "García",
                "San Pedro Garza García",
                "General Bravo",
                "General Escobedo",
                "General Terán",
                "General Treviño",
                "General Zaragoza",
                "General Zuazua",
                "Guadalupe",
                "Los Herreras",
                "Higueras",
                "Hualahuises",
                "Iturbide",
                "Juárez",
                "Lampazos de Naranjo",
                "Linares",
                "Marín",
                "Melchor Ocampo",
                "Mier y Noriega",
                "Mina",
                "Montemorelos",
                "Monterrey",
                "Parás",
                "Pesquería",
                "Los Ramones",
                "Rayones",
                "Sabinas Hidalgo",
                "Salinas Victoria",
                "San Nicolás de los Garza",
                "Hidalgo",
                "Santa Catarina",
                "Santiago",
                "Vallecillo",
                "Villaldama"
            ],
            "Oaxaca": [
                "Abejones",
                "Acatlán de Pérez Figueroa",
                "Asunción Cacalotepec",
                "Asunción Cuyotepeji",
                "Asunción Ixtaltepec",
                "Asunción Nochixtlán",
                "Asunción Ocotlán",
                "Asunción Tlacolulita",
                "Ayotzintepec",
                "El Barrio de la Soledad",
                "Calihualá",
                "Candelaria Loxicha",
                "Ciénega de Zimatlán",
                "Ciudad Ixtepec",
                "Coatecas Altas",
                "Coicoyán de las Flores",
                "La Compañía",
                "Concepción Buenavista",
                "Concepción Pápalo",
                "Constancia del Rosario",
                "Cosolapa",
                "Cosoltepec",
                "Cuilápam de Guerrero",
                "Cuyamecalco Villa de Zaragoza",
                "Chahuites",
                "Chalcatongo de Hidalgo",
                "Chiquihuitlán de Benito Juárez",
                "Heroica Ciudad de Ejutla de Crespo",
                "Eloxochitlán de Flores Magón",
                "El Espinal",
                "Tamazulápam del Espíritu Santo",
                "Fresnillo de Trujano",
                "Guadalupe Etla",
                "Guadalupe de Ramírez",
                "Guelatao de Juárez",
                "Guevea de Humboldt",
                "Mesones Hidalgo",
                "Villa Hidalgo",
                "Heroica Ciudad de Huajuapan de León",
                "Huautepec",
                "Huautla de Jiménez",
                "Ixtlán de Juárez",
                "Heroica Ciudad de Juchitán de Zaragoza",
                "Loma Bonita",
                "Magdalena Apasco",
                "Magdalena Jaltepec",
                "Santa Magdalena Jicotlán",
                "Magdalena Mixtepec",
                "Magdalena Ocotlán",
                "Magdalena Peñasco",
                "Magdalena Teitipac",
                "Magdalena Tequisistlán",
                "Magdalena Tlacotepec",
                "Magdalena Zahuatlán",
                "Mariscala de Juárez",
                "Mártires de Tacubaya",
                "Matías Romero Avendaño",
                "Mazatlán Villa de Flores",
                "Miahuatlán de Porfirio Díaz",
                "Mixistlán de la Reforma",
                "Monjas",
                "Natividad",
                "Nazareno Etla",
                "Nejapa de Madero",
                "Ixpantepec Nieves",
                "Santiago Niltepec",
                "Oaxaca de Juárez",
                "Ocotlán de Morelos",
                "La Pe",
                "Pinotepa de Don Luis",
                "Pluma Hidalgo",
                "San José del Progreso",
                "Putla Villa de Guerrero",
                "Santa Catarina Quioquitani",
                "Reforma de Pineda",
                "La Reforma",
                "Reyes Etla",
                "Rojas de Cuauhtémoc",
                "Salina Cruz",
                "San Agustín Amatengo",
                "San Agustín Atenango",
                "San Agustín Chayuco",
                "San Agustín de las Juntas",
                "San Agustín Etla",
                "San Agustín Loxicha",
                "San Agustín Tlacotepec",
                "San Agustín Yatareni",
                "San Andrés Cabecera Nueva",
                "San Andrés Dinicuiti",
                "San Andrés Huaxpaltepec",
                "San Andrés Huayápam",
                "San Andrés Ixtlahuaca",
                "San Andrés Lagunas",
                "San Andrés Nuxiño",
                "San Andrés Paxtlán",
                "San Andrés Sinaxtla",
                "San Andrés Solaga",
                "San Andrés Teotilálpam",
                "San Andrés Tepetlapa",
                "San Andrés Yaá",
                "San Andrés Zabache",
                "San Andrés Zautla",
                "San Antonino Castillo Velasco",
                "San Antonino el Alto",
                "San Antonino Monte Verde",
                "San Antonio Acutla",
                "San Antonio de la Cal",
                "San Antonio Huitepec",
                "San Antonio Nanahuatípam",
                "San Antonio Sinicahua",
                "San Antonio Tepetlapa",
                "San Baltazar Chichicápam",
                "San Baltazar Loxicha",
                "San Baltazar Yatzachi el Bajo",
                "San Bartolo Coyotepec",
                "San Bartolomé Ayautla",
                "San Bartolomé Loxicha",
                "San Bartolomé Quialana",
                "San Bartolomé Yucuañe",
                "San Bartolomé Zoogocho",
                "San Bartolo Soyaltepec",
                "San Bartolo Yautepec",
                "San Bernardo Mixtepec",
                "San Blas Atempa",
                "San Carlos Yautepec",
                "San Cristóbal Amatlán",
                "San Cristóbal Amoltepec",
                "San Cristóbal Lachirioag",
                "San Cristóbal Suchixtlahuaca",
                "San Dionisio del Mar",
                "San Dionisio Ocotepec",
                "San Dionisio Ocotlán",
                "San Esteban Atatlahuca",
                "San Felipe Jalapa de Díaz",
                "San Felipe Tejalápam",
                "San Felipe Usila",
                "San Francisco Cahuacuá",
                "San Francisco Cajonos",
                "San Francisco Chapulapa",
                "San Francisco Chindúa",
                "San Francisco del Mar",
                "San Francisco Huehuetlán",
                "San Francisco Ixhuatán",
                "San Francisco Jaltepetongo",
                "San Francisco Lachigoló",
                "San Francisco Logueche",
                "San Francisco Nuxaño",
                "San Francisco Ozolotepec",
                "San Francisco Sola",
                "San Francisco Telixtlahuaca",
                "San Francisco Teopan",
                "San Francisco Tlapancingo",
                "San Gabriel Mixtepec",
                "San Ildefonso Amatlán",
                "San Ildefonso Sola",
                "San Ildefonso Villa Alta",
                "San Jacinto Amilpas",
                "San Jacinto Tlacotepec",
                "San Jerónimo Coatlán",
                "San Jerónimo Silacayoapilla",
                "San Jerónimo Sosola",
                "San Jerónimo Taviche",
                "San Jerónimo Tecóatl",
                "San Jorge Nuchita",
                "San José Ayuquila",
                "San José Chiltepec",
                "San José del Peñasco",
                "San José Estancia Grande",
                "San José Independencia",
                "San José Lachiguiri",
                "San José Tenango",
                "San Juan Achiutla",
                "San Juan Atepec",
                "Ánimas Trujano",
                "San Juan Bautista Atatlahuca",
                "San Juan Bautista Coixtlahuaca",
                "San Juan Bautista Cuicatlán",
                "San Juan Bautista Guelache",
                "San Juan Bautista Jayacatlán",
                "San Juan Bautista Lo de Soto",
                "San Juan Bautista Suchitepec",
                "San Juan Bautista Tlacoatzintepec",
                "San Juan Bautista Tlachichilco",
                "San Juan Bautista Tuxtepec",
                "San Juan Cacahuatepec",
                "San Juan Cieneguilla",
                "San Juan Coatzóspam",
                "San Juan Colorado",
                "San Juan Comaltepec",
                "San Juan Cotzocón",
                "San Juan Chicomezúchil",
                "San Juan Chilateca",
                "San Juan del Estado",
                "San Juan del Río",
                "San Juan Diuxi",
                "San Juan Evangelista Analco",
                "San Juan Guelavía",
                "San Juan Guichicovi",
                "San Juan Ihualtepec",
                "San Juan Juquila Mixes",
                "San Juan Juquila Vijanos",
                "San Juan Lachao",
                "San Juan Lachigalla",
                "San Juan Lajarcia",
                "San Juan Lalana",
                "San Juan de los Cués",
                "San Juan Mazatlán",
                "San Juan Mixtepec",
                "San Juan Mixtepec",
                "San Juan Ñumí",
                "San Juan Ozolotepec",
                "San Juan Petlapa",
                "San Juan Quiahije",
                "San Juan Quiotepec",
                "San Juan Sayultepec",
                "San Juan Tabaá",
                "San Juan Tamazola",
                "San Juan Teita",
                "San Juan Teitipac",
                "San Juan Tepeuxila",
                "San Juan Teposcolula",
                "San Juan Yaeé",
                "San Juan Yatzona",
                "San Juan Yucuita",
                "San Lorenzo",
                "San Lorenzo Albarradas",
                "San Lorenzo Cacaotepec",
                "San Lorenzo Cuaunecuiltitla",
                "San Lorenzo Texmelúcan",
                "San Lorenzo Victoria",
                "San Lucas Camotlán",
                "San Lucas Ojitlán",
                "San Lucas Quiaviní",
                "San Lucas Zoquiápam",
                "San Luis Amatlán",
                "San Marcial Ozolotepec",
                "San Marcos Arteaga",
                "San Martín de los Cansecos",
                "San Martín Huamelúlpam",
                "San Martín Itunyoso",
                "San Martín Lachilá",
                "San Martín Peras",
                "San Martín Tilcajete",
                "San Martín Toxpalan",
                "San Martín Zacatepec",
                "San Mateo Cajonos",
                "Capulálpam de Méndez",
                "San Mateo del Mar",
                "San Mateo Yoloxochitlán",
                "San Mateo Etlatongo",
                "San Mateo Nejápam",
                "San Mateo Peñasco",
                "San Mateo Piñas",
                "San Mateo Río Hondo",
                "San Mateo Sindihui",
                "San Mateo Tlapiltepec",
                "San Melchor Betaza",
                "San Miguel Achiutla",
                "San Miguel Ahuehuetitlán",
                "San Miguel Aloápam",
                "San Miguel Amatitlán",
                "San Miguel Amatlán",
                "San Miguel Coatlán",
                "San Miguel Chicahua",
                "San Miguel Chimalapa",
                "San Miguel del Puerto",
                "San Miguel del Río",
                "San Miguel Ejutla",
                "San Miguel el Grande",
                "San Miguel Huautla",
                "San Miguel Mixtepec",
                "San Miguel Panixtlahuaca",
                "San Miguel Peras",
                "San Miguel Piedras",
                "San Miguel Quetzaltepec",
                "San Miguel Santa Flor",
                "Villa Sola de Vega",
                "San Miguel Soyaltepec",
                "San Miguel Suchixtepec",
                "Villa Talea de Castro",
                "San Miguel Tecomatlán",
                "San Miguel Tenango",
                "San Miguel Tequixtepec",
                "San Miguel Tilquiápam",
                "San Miguel Tlacamama",
                "San Miguel Tlacotepec",
                "San Miguel Tulancingo",
                "San Miguel Yotao",
                "San Nicolás",
                "San Nicolás Hidalgo",
                "San Pablo Coatlán",
                "San Pablo Cuatro Venados",
                "San Pablo Etla",
                "San Pablo Huitzo",
                "San Pablo Huixtepec",
                "San Pablo Macuiltianguis",
                "San Pablo Tijaltepec",
                "San Pablo Villa de Mitla",
                "San Pablo Yaganiza",
                "San Pedro Amuzgos",
                "San Pedro Apóstol",
                "San Pedro Atoyac",
                "San Pedro Cajonos",
                "San Pedro Coxcaltepec Cántaros",
                "San Pedro Comitancillo",
                "San Pedro el Alto",
                "San Pedro Huamelula",
                "San Pedro Huilotepec",
                "San Pedro Ixcatlán",
                "San Pedro Ixtlahuaca",
                "San Pedro Jaltepetongo",
                "San Pedro Jicayán",
                "San Pedro Jocotipac",
                "San Pedro Juchatengo",
                "San Pedro Mártir",
                "San Pedro Mártir Quiechapa",
                "San Pedro Mártir Yucuxaco",
                "San Pedro Mixtepec",
                "San Pedro Mixtepec",
                "San Pedro Molinos",
                "San Pedro Nopala",
                "San Pedro Ocopetatillo",
                "San Pedro Ocotepec",
                "San Pedro Pochutla",
                "San Pedro Quiatoni",
                "San Pedro Sochiápam",
                "San Pedro Tapanatepec",
                "San Pedro Taviche",
                "San Pedro Teozacoalco",
                "San Pedro Teutila",
                "San Pedro Tidaá",
                "San Pedro Topiltepec",
                "San Pedro Totolápam",
                "Villa de Tututepec",
                "San Pedro Yaneri",
                "San Pedro Yólox",
                "San Pedro y San Pablo Ayutla",
                "Villa de Etla",
                "San Pedro y San Pablo Teposcolula",
                "San Pedro y San Pablo Tequixtepec",
                "San Pedro Yucunama",
                "San Raymundo Jalpan",
                "San Sebastián Abasolo",
                "San Sebastián Coatlán",
                "San Sebastián Ixcapa",
                "San Sebastián Nicananduta",
                "San Sebastián Río Hondo",
                "San Sebastián Tecomaxtlahuaca",
                "San Sebastián Teitipac",
                "San Sebastián Tutla",
                "San Simón Almolongas",
                "San Simón Zahuatlán",
                "Santa Ana",
                "Santa Ana Ateixtlahuaca",
                "Santa Ana Cuauhtémoc",
                "Santa Ana del Valle",
                "Santa Ana Tavela",
                "Santa Ana Tlapacoyan",
                "Santa Ana Yareni",
                "Santa Ana Zegache",
                "Santa Catalina Quierí",
                "Santa Catarina Cuixtla",
                "Santa Catarina Ixtepeji",
                "Santa Catarina Juquila",
                "Santa Catarina Lachatao",
                "Santa Catarina Loxicha",
                "Santa Catarina Mechoacán",
                "Santa Catarina Minas",
                "Santa Catarina Quiané",
                "Santa Catarina Tayata",
                "Santa Catarina Ticuá",
                "Santa Catarina Yosonotú",
                "Santa Catarina Zapoquila",
                "Santa Cruz Acatepec",
                "Santa Cruz Amilpas",
                "Santa Cruz de Bravo",
                "Santa Cruz Itundujia",
                "Santa Cruz Mixtepec",
                "Santa Cruz Nundaco",
                "Santa Cruz Papalutla",
                "Santa Cruz Tacache de Mina",
                "Santa Cruz Tacahua",
                "Santa Cruz Tayata",
                "Santa Cruz Xitla",
                "Santa Cruz Xoxocotlán",
                "Santa Cruz Zenzontepec",
                "Santa Gertrudis",
                "Santa Inés del Monte",
                "Santa Inés Yatzeche",
                "Santa Lucía del Camino",
                "Santa Lucía Miahuatlán",
                "Santa Lucía Monteverde",
                "Santa Lucía Ocotlán",
                "Santa María Alotepec",
                "Santa María Apazco",
                "Santa María la Asunción",
                "Heroica Ciudad de Tlaxiaco",
                "Ayoquezco de Aldama",
                "Santa María Atzompa",
                "Santa María Camotlán",
                "Santa María Colotepec",
                "Santa María Cortijo",
                "Santa María Coyotepec",
                "Santa María Chachoápam",
                "Villa de Chilapa de Díaz",
                "Santa María Chilchotla",
                "Santa María Chimalapa",
                "Santa María del Rosario",
                "Santa María del Tule",
                "Santa María Ecatepec",
                "Santa María Guelacé",
                "Santa María Guienagati",
                "Santa María Huatulco",
                "Santa María Huazolotitlán",
                "Santa María Ipalapa",
                "Santa María Ixcatlán",
                "Santa María Jacatepec",
                "Santa María Jalapa del Marqués",
                "Santa María Jaltianguis",
                "Santa María Lachixío",
                "Santa María Mixtequilla",
                "Santa María Nativitas",
                "Santa María Nduayaco",
                "Santa María Ozolotepec",
                "Santa María Pápalo",
                "Santa María Peñoles",
                "Santa María Petapa",
                "Santa María Quiegolani",
                "Santa María Sola",
                "Santa María Tataltepec",
                "Santa María Tecomavaca",
                "Santa María Temaxcalapa",
                "Santa María Temaxcaltepec",
                "Santa María Teopoxco",
                "Santa María Tepantlali",
                "Santa María Texcatitlán",
                "Santa María Tlahuitoltepec",
                "Santa María Tlalixtac",
                "Santa María Tonameca",
                "Santa María Totolapilla",
                "Santa María Xadani",
                "Santa María Yalina",
                "Santa María Yavesía",
                "Santa María Yolotepec",
                "Santa María Yosoyúa",
                "Santa María Yucuhiti",
                "Santa María Zacatepec",
                "Santa María Zaniza",
                "Santa María Zoquitlán",
                "Santiago Amoltepec",
                "Santiago Apoala",
                "Santiago Apóstol",
                "Santiago Astata",
                "Santiago Atitlán",
                "Santiago Ayuquililla",
                "Santiago Cacaloxtepec",
                "Santiago Camotlán",
                "Santiago Comaltepec",
                "Santiago Chazumba",
                "Santiago Choápam",
                "Santiago del Río",
                "Santiago Huajolotitlán",
                "Santiago Huauclilla",
                "Santiago Ihuitlán Plumas",
                "Santiago Ixcuintepec",
                "Santiago Ixtayutla",
                "Santiago Jamiltepec",
                "Santiago Jocotepec",
                "Santiago Juxtlahuaca",
                "Santiago Lachiguiri",
                "Santiago Lalopa",
                "Santiago Laollaga",
                "Santiago Laxopa",
                "Santiago Llano Grande",
                "Santiago Matatlán",
                "Santiago Miltepec",
                "Santiago Minas",
                "Santiago Nacaltepec",
                "Santiago Nejapilla",
                "Santiago Nundiche",
                "Santiago Nuyoó",
                "Santiago Pinotepa Nacional",
                "Santiago Suchilquitongo",
                "Santiago Tamazola",
                "Santiago Tapextla",
                "Villa Tejúpam de la Unión",
                "Santiago Tenango",
                "Santiago Tepetlapa",
                "Santiago Tetepec",
                "Santiago Texcalcingo",
                "Santiago Textitlán",
                "Santiago Tilantongo",
                "Santiago Tillo",
                "Santiago Tlazoyaltepec",
                "Santiago Xanica",
                "Santiago Xiacuí",
                "Santiago Yaitepec",
                "Santiago Yaveo",
                "Santiago Yolomécatl",
                "Santiago Yosondúa",
                "Santiago Yucuyachi",
                "Santiago Zacatepec",
                "Santiago Zoochila",
                "Nuevo Zoquiápam",
                "Santo Domingo Ingenio",
                "Santo Domingo Albarradas",
                "Santo Domingo Armenta",
                "Santo Domingo Chihuitán",
                "Santo Domingo de Morelos",
                "Santo Domingo Ixcatlán",
                "Santo Domingo Nuxaá",
                "Santo Domingo Ozolotepec",
                "Santo Domingo Petapa",
                "Santo Domingo Roayaga",
                "Santo Domingo Tehuantepec",
                "Santo Domingo Teojomulco",
                "Santo Domingo Tepuxtepec",
                "Santo Domingo Tlatayápam",
                "Santo Domingo Tomaltepec",
                "Santo Domingo Tonalá",
                "Santo Domingo Tonaltepec",
                "Santo Domingo Xagacía",
                "Santo Domingo Yanhuitlán",
                "Santo Domingo Yodohino",
                "Santo Domingo Zanatepec",
                "Santos Reyes Nopala",
                "Santos Reyes Pápalo",
                "Santos Reyes Tepejillo",
                "Santos Reyes Yucuná",
                "Santo Tomás Jalieza",
                "Santo Tomás Mazaltepec",
                "Santo Tomás Ocotepec",
                "Santo Tomás Tamazulapan",
                "San Vicente Coatlán",
                "San Vicente Lachixío",
                "San Vicente Nuñú",
                "Silacayoápam",
                "Sitio de Xitlapehua",
                "Soledad Etla",
                "Villa de Tamazulápam del Progreso",
                "Tanetze de Zaragoza",
                "Taniche",
                "Tataltepec de Valdés",
                "Teococuilco de Marcos Pérez",
                "Teotitlán de Flores Magón",
                "Teotitlán del Valle",
                "Teotongo",
                "Tepelmeme Villa de Morelos",
                "Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca",
                "San Jerónimo Tlacochahuaya",
                "Tlacolula de Matamoros",
                "Tlacotepec Plumas",
                "Tlalixtac de Cabrera",
                "Totontepec Villa de Morelos",
                "Trinidad Zaachila",
                "La Trinidad Vista Hermosa",
                "Unión Hidalgo",
                "Valerio Trujano",
                "San Juan Bautista Valle Nacional",
                "Villa Díaz Ordaz",
                "Yaxe",
                "Magdalena Yodocono de Porfirio Díaz",
                "Yogana",
                "Yutanduchi de Guerrero",
                "Villa de Zaachila",
                "San Mateo Yucutindoo",
                "Zapotitlán Lagunas",
                "Zapotitlán Palmas",
                "Santa Inés de Zaragoza",
                "Zimatlán de Álvarez"
            ],
            "Puebla": [
                "Acajete",
                "Acateno",
                "Acatlán",
                "Acatzingo",
                "Acteopan",
                "Ahuacatlán",
                "Ahuatlán",
                "Ahuazotepec",
                "Ahuehuetitla",
                "Ajalpan",
                "Albino Zertuche",
                "Aljojuca",
                "Altepexi",
                "Amixtlán",
                "Amozoc",
                "Aquixtla",
                "Atempan",
                "Atexcal",
                "Atlixco",
                "Atoyatempan",
                "Atzala",
                "Atzitzihuacán",
                "Atzitzintla",
                "Axutla",
                "Ayotoxco de Guerrero",
                "Calpan",
                "Caltepec",
                "Camocuautla",
                "Caxhuacan",
                "Coatepec",
                "Coatzingo",
                "Cohetzala",
                "Cohuecan",
                "Coronango",
                "Coxcatlán",
                "Coyomeapan",
                "Coyotepec",
                "Cuapiaxtla de Madero",
                "Cuautempan",
                "Cuautinchán",
                "Cuautlancingo",
                "Cuayuca de Andrade",
                "Cuetzalan del Progreso",
                "Cuyoaco",
                "Chalchicomula de Sesma",
                "Chapulco",
                "Chiautla",
                "Chiautzingo",
                "Chiconcuautla",
                "Chichiquila",
                "Chietla",
                "Chigmecatitlán",
                "Chignahuapan",
                "Chignautla",
                "Chila",
                "Chila de la Sal",
                "Honey",
                "Chilchotla",
                "Chinantla",
                "Domingo Arenas",
                "Eloxochitlán",
                "Epatlán",
                "Esperanza",
                "Francisco Z. Mena",
                "General Felipe Ángeles",
                "Guadalupe",
                "Guadalupe Victoria",
                "Hermenegildo Galeana",
                "Huaquechula",
                "Huatlatlauca",
                "Huauchinango",
                "Huehuetla",
                "Huehuetlán el Chico",
                "Huejotzingo",
                "Hueyapan",
                "Hueytamalco",
                "Hueytlalpan",
                "Huitzilan de Serdán",
                "Huitziltepec",
                "Atlequizayan",
                "Ixcamilpa de Guerrero",
                "Ixcaquixtla",
                "Ixtacamaxtitlán",
                "Ixtepec",
                "Izúcar de Matamoros",
                "Jalpan",
                "Jolalpan",
                "Jonotla",
                "Jopala",
                "Juan C. Bonilla",
                "Juan Galindo",
                "Juan N. Méndez",
                "Lafragua",
                "Libres",
                "La Magdalena Tlatlauquitepec",
                "Mazapiltepec de Juárez",
                "Mixtla",
                "Molcaxac",
                "Cañada Morelos",
                "Naupan",
                "Nauzontla",
                "Nealtican",
                "Nicolás Bravo",
                "Nopalucan",
                "Ocotepec",
                "Ocoyucan",
                "Olintla",
                "Oriental",
                "Pahuatlán",
                "Palmar de Bravo",
                "Pantepec",
                "Petlalcingo",
                "Piaxtla",
                "Puebla",
                "Quecholac",
                "Quimixtlán",
                "Rafael Lara Grajales",
                "Los Reyes de Juárez",
                "San Andrés Cholula",
                "San Antonio Cañada",
                "San Diego la Mesa Tochimiltzingo",
                "San Felipe Teotlalcingo",
                "San Felipe Tepatlán",
                "San Gabriel Chilac",
                "San Gregorio Atzompa",
                "San Jerónimo Tecuanipan",
                "San Jerónimo Xayacatlán",
                "San José Chiapa",
                "San José Miahuatlán",
                "San Juan Atenco",
                "San Juan Atzompa",
                "San Martín Texmelucan",
                "San Martín Totoltepec",
                "San Matías Tlalancaleca",
                "San Miguel Ixitlán",
                "San Miguel Xoxtla",
                "San Nicolás Buenos Aires",
                "San Nicolás de los Ranchos",
                "San Pablo Anicano",
                "San Pedro Cholula",
                "San Pedro Yeloixtlahuaca",
                "San Salvador el Seco",
                "San Salvador el Verde",
                "San Salvador Huixcolotla",
                "San Sebastián Tlacotepec",
                "Santa Catarina Tlaltempan",
                "Santa Inés Ahuatempan",
                "Santa Isabel Cholula",
                "Santiago Miahuatlán",
                "Huehuetlán el Grande",
                "Santo Tomás Hueyotlipan",
                "Soltepec",
                "Tecali de Herrera",
                "Tecamachalco",
                "Tecomatlán",
                "Tehuacán",
                "Tehuitzingo",
                "Tenampulco",
                "Teopantlán",
                "Teotlalco",
                "Tepanco de López",
                "Tepango de Rodríguez",
                "Tepatlaxco de Hidalgo",
                "Tepeaca",
                "Tepemaxalco",
                "Tepeojuma",
                "Tepetzintla",
                "Tepexco",
                "Tepexi de Rodríguez",
                "Tepeyahualco",
                "Tepeyahualco de Cuauhtémoc",
                "Tetela de Ocampo",
                "Teteles de Avila Castillo",
                "Teziutlán",
                "Tianguismanalco",
                "Tilapa",
                "Tlacotepec de Benito Juárez",
                "Tlacuilotepec",
                "Tlachichuca",
                "Tlahuapan",
                "Tlaltenango",
                "Tlanepantla",
                "Tlaola",
                "Tlapacoya",
                "Tlapanalá",
                "Tlatlauquitepec",
                "Tlaxco",
                "Tochimilco",
                "Tochtepec",
                "Totoltepec de Guerrero",
                "Tulcingo",
                "Tuzamapan de Galeana",
                "Tzicatlacoyan",
                "Venustiano Carranza",
                "Vicente Guerrero",
                "Xayacatlán de Bravo",
                "Xicotepec",
                "Xicotlán",
                "Xiutetelco",
                "Xochiapulco",
                "Xochiltepec",
                "Xochitlán de Vicente Suárez",
                "Xochitlán Todos Santos",
                "Yaonáhuac",
                "Yehualtepec",
                "Zacapala",
                "Zacapoaxtla",
                "Zacatlán",
                "Zapotitlán",
                "Zapotitlán de Méndez",
                "Zaragoza",
                "Zautla",
                "Zihuateutla",
                "Zinacatepec",
                "Zongozotla",
                "Zoquiapan",
                "Zoquitlán"
            ],
            "Querétaro": [
                "Amealco de Bonfil",
                "Pinal de Amoles",
                "Arroyo Seco",
                "Cadereyta de Montes",
                "Colón",
                "Corregidora",
                "Ezequiel Montes",
                "Huimilpan",
                "Jalpan de Serra",
                "Landa de Matamoros",
                "El Marqués",
                "Pedro Escobedo",
                "Peñamiller",
                "Querétaro",
                "San Joaquín",
                "San Juan del Río",
                "Tequisquiapan",
                "Tolimán"
            ],
            "Quintana Roo": [
                "Cozumel",
                "Felipe Carrillo Puerto",
                "Isla Mujeres",
                "Othón P. Blanco",
                "Benito Juárez",
                "José María Morelos",
                "Lázaro Cárdenas",
                "Solidaridad",
                "Tulum",
                "Bacalar",
                "Puerto Morelos"
            ],
            "San Luis Potosí": [
                "Ahualulco",
                "Alaquines",
                "Aquismón",
                "Armadillo de los Infante",
                "Cárdenas",
                "Catorce",
                "Cedral",
                "Cerritos",
                "Cerro de San Pedro",
                "Ciudad del Maíz",
                "Ciudad Fernández",
                "Tancanhuitz",
                "Ciudad Valles",
                "Coxcatlán",
                "Charcas",
                "Ebano",
                "Guadalcázar",
                "Huehuetlán",
                "Lagunillas",
                "Matehuala",
                "Mexquitic de Carmona",
                "Moctezuma",
                "Rayón",
                "Rioverde",
                "Salinas",
                "San Antonio",
                "San Ciro de Acosta",
                "San Luis Potosí",
                "San Martín Chalchicuautla",
                "San Nicolás Tolentino",
                "Santa Catarina",
                "Santa María del Río",
                "Santo Domingo",
                "San Vicente Tancuayalab",
                "Soledad de Graciano Sánchez",
                "Tamasopo",
                "Tamazunchale",
                "Tampacán",
                "Tampamolón Corona",
                "Tamuín",
                "Tanlajás",
                "Tanquián de Escobedo",
                "Tierra Nueva",
                "Vanegas",
                "Venado",
                "Villa de Arriaga",
                "Villa de Guadalupe",
                "Villa de la Paz",
                "Villa de Ramos",
                "Villa de Reyes",
                "Villa Hidalgo",
                "Villa Juárez",
                "Axtla de Terrazas",
                "Xilitla",
                "Zaragoza",
                "Villa de Arista",
                "Matlapa",
                "El Naranjo"
            ],
            "Sinaloa": [
                "Ahome",
                "Angostura",
                "Badiraguato",
                "Concordia",
                "Cosalá",
                "Culiacán",
                "Choix",
                "Elota",
                "Escuinapa",
                "El Fuerte",
                "Guasave",
                "Mazatlán",
                "Mocorito",
                "Rosario",
                "Salvador Alvarado",
                "San Ignacio",
                "Sinaloa",
                "Navolato"
            ],
            "Sonora": [
                "Aconchi",
                "Agua Prieta",
                "Alamos",
                "Altar",
                "Arivechi",
                "Arizpe",
                "Atil",
                "Bacadéhuachi",
                "Bacanora",
                "Bacerac",
                "Bacoachi",
                "Bácum",
                "Banámichi",
                "Baviácora",
                "Bavispe",
                "Benjamín Hill",
                "Caborca",
                "Cajeme",
                "Cananea",
                "Carbó",
                "La Colorada",
                "Cucurpe",
                "Cumpas",
                "Divisaderos",
                "Empalme",
                "Etchojoa",
                "Fronteras",
                "Granados",
                "Guaymas",
                "Hermosillo",
                "Huachinera",
                "Huásabas",
                "Huatabampo",
                "Huépac",
                "Imuris",
                "Magdalena",
                "Mazatán",
                "Moctezuma",
                "Naco",
                "Nácori Chico",
                "Nacozari de García",
                "Navojoa",
                "Nogales",
                "Onavas",
                "Opodepe",
                "Oquitoa",
                "Pitiquito",
                "Puerto Peñasco",
                "Quiriego",
                "Rayón",
                "Rosario",
                "Sahuaripa",
                "San Felipe de Jesús",
                "San Javier",
                "San Luis Río Colorado",
                "San Miguel de Horcasitas",
                "San Pedro de la Cueva",
                "Santa Ana",
                "Santa Cruz",
                "Sáric",
                "Soyopa",
                "Suaqui Grande",
                "Tepache",
                "Trincheras",
                "Tubutama",
                "Ures",
                "Villa Hidalgo",
                "Villa Pesqueira",
                "Yécora",
                "General Plutarco Elías Calles",
                "Benito Juárez",
                "San Ignacio Río Muerto"
            ],
            "Tabasco": [
                "Balancán",
                "Cárdenas",
                "Centla",
                "Centro",
                "Comalcalco",
                "Cunduacán",
                "Emiliano Zapata",
                "Huimanguillo",
                "Jalapa",
                "Jalpa de Méndez",
                "Jonuta",
                "Macuspana",
                "Nacajuca",
                "Paraíso",
                "Tacotalpa",
                "Teapa",
                "Tenosique"
            ],
            "Tamaulipas": [
                "Abasolo",
                "Aldama",
                "Altamira",
                "Antiguo Morelos",
                "Burgos",
                "Bustamante",
                "Camargo",
                "Casas",
                "Ciudad Madero",
                "Cruillas",
                "Gómez Farías",
                "González",
                "Güémez",
                "Guerrero",
                "Gustavo Díaz Ordaz",
                "Hidalgo",
                "Jaumave",
                "Jiménez",
                "Llera",
                "Mainero",
                "El Mante",
                "Matamoros",
                "Méndez",
                "Mier",
                "Miguel Alemán",
                "Miquihuana",
                "Nuevo Laredo",
                "Nuevo Morelos",
                "Ocampo",
                "Padilla",
                "Palmillas",
                "Reynosa",
                "Río Bravo",
                "San Carlos",
                "San Fernando",
                "San Nicolás",
                "Soto la Marina",
                "Tampico",
                "Tula",
                "Valle Hermoso",
                "Victoria",
                "Villagrán",
                "Xicoténcatl"
            ],
            "Tlaxcala": [
                "Amaxac de Guerrero",
                "Apetatitlán de Antonio Carvajal",
                "Atlangatepec",
                "Atltzayanca",
                "Apizaco",
                "Calpulalpan",
                "El Carmen Tequexquitla",
                "Cuapiaxtla",
                "Cuaxomulco",
                "Chiautempan",
                "Muñoz de Domingo Arenas",
                "Españita",
                "Huamantla",
                "Hueyotlipan",
                "Ixtacuixtla de Mariano Matamoros",
                "Ixtenco",
                "Mazatecochco de José María Morelos",
                "Contla de Juan Cuamatzi",
                "Tepetitla de Lardizábal",
                "Sanctórum de Lázaro Cárdenas",
                "Nanacamilpa de Mariano Arista",
                "Acuamanala de Miguel Hidalgo",
                "Natívitas",
                "Panotla",
                "San Pablo del Monte",
                "Santa Cruz Tlaxcala",
                "Tenancingo",
                "Teolocholco",
                "Tepeyanco",
                "Terrenate",
                "Tetla de la Solidaridad",
                "Tetlatlahuca",
                "Tlaxcala",
                "Tlaxco",
                "Tocatlán",
                "Totolac",
                "Ziltlaltépec de Trinidad Sánchez Santos",
                "Tzompantepec",
                "Xaloztoc",
                "Xaltocan",
                "Papalotla de Xicohténcatl",
                "Xicohtzinco",
                "Yauhquemehcan",
                "Zacatelco",
                "Benito Juárez",
                "Emiliano Zapata",
                "Lázaro Cárdenas",
                "La Magdalena Tlaltelulco",
                "San Damián Texóloc",
                "San Francisco Tetlanohcan",
                "San Jerónimo Zacualpan",
                "San José Teacalco",
                "San Juan Huactzinco",
                "San Lorenzo Axocomanitla",
                "San Lucas Tecopilco",
                "Santa Ana Nopalucan",
                "Santa Apolonia Teacalco",
                "Santa Catarina Ayometla",
                "Santa Cruz Quilehtla",
                "Santa Isabel Xiloxoxtla"
            ],
            "Veracruz de Ignacio de la Llave": [
                "Acajete",
                "Acatlán",
                "Acayucan",
                "Actopan",
                "Acula",
                "Acultzingo",
                "Camarón de Tejeda",
                "Alpatláhuac",
                "Alto Lucero de Gutiérrez Barrios",
                "Altotonga",
                "Alvarado",
                "Amatitlán",
                "Naranjos Amatlán",
                "Amatlán de los Reyes",
                "Angel R. Cabada",
                "La Antigua",
                "Apazapan",
                "Aquila",
                "Astacinga",
                "Atlahuilco",
                "Atoyac",
                "Atzacan",
                "Atzalan",
                "Tlaltetela",
                "Ayahualulco",
                "Banderilla",
                "Benito Juárez",
                "Boca del Río",
                "Calcahualco",
                "Camerino Z. Mendoza",
                "Carrillo Puerto",
                "Catemaco",
                "Cazones de Herrera",
                "Cerro Azul",
                "Citlaltépetl",
                "Coacoatzintla",
                "Coahuitlán",
                "Coatepec",
                "Coatzacoalcos",
                "Coatzintla",
                "Coetzala",
                "Colipa",
                "Comapa",
                "Córdoba",
                "Cosamaloapan de Carpio",
                "Cosautlán de Carvajal",
                "Coscomatepec",
                "Cosoleacaque",
                "Cotaxtla",
                "Coxquihui",
                "Coyutla",
                "Cuichapa",
                "Cuitláhuac",
                "Chacaltianguis",
                "Chalma",
                "Chiconamel",
                "Chiconquiaco",
                "Chicontepec",
                "Chinameca",
                "Chinampa de Gorostiza",
                "Las Choapas",
                "Chocamán",
                "Chontla",
                "Chumatlán",
                "Emiliano Zapata",
                "Espinal",
                "Filomeno Mata",
                "Fortín",
                "Gutiérrez Zamora",
                "Hidalgotitlán",
                "Huatusco",
                "Huayacocotla",
                "Hueyapan de Ocampo",
                "Huiloapan de Cuauhtémoc",
                "Ignacio de la Llave",
                "Ilamatlán",
                "Isla",
                "Ixcatepec",
                "Ixhuacán de los Reyes",
                "Ixhuatlán del Café",
                "Ixhuatlancillo",
                "Ixhuatlán del Sureste",
                "Ixhuatlán de Madero",
                "Ixmatlahuacan",
                "Ixtaczoquitlán",
                "Jalacingo",
                "Xalapa",
                "Jalcomulco",
                "Jáltipan",
                "Jamapa",
                "Jesús Carranza",
                "Xico",
                "Jilotepec",
                "Juan Rodríguez Clara",
                "Juchique de Ferrer",
                "Landero y Coss",
                "Lerdo de Tejada",
                "Magdalena",
                "Maltrata",
                "Manlio Fabio Altamirano",
                "Mariano Escobedo",
                "Martínez de la Torre",
                "Mecatlán",
                "Mecayapan",
                "Medellín de Bravo",
                "Miahuatlán",
                "Las Minas",
                "Minatitlán",
                "Misantla",
                "Mixtla de Altamirano",
                "Moloacán",
                "Naolinco",
                "Naranjal",
                "Nautla",
                "Nogales",
                "Oluta",
                "Omealca",
                "Orizaba",
                "Otatitlán",
                "Oteapan",
                "Ozuluama de Mascareñas",
                "Pajapan",
                "Pánuco",
                "Papantla",
                "Paso del Macho",
                "Paso de Ovejas",
                "La Perla",
                "Perote",
                "Platón Sánchez",
                "Playa Vicente",
                "Poza Rica de Hidalgo",
                "Las Vigas de Ramírez",
                "Pueblo Viejo",
                "Puente Nacional",
                "Rafael Delgado",
                "Rafael Lucio",
                "Los Reyes",
                "Río Blanco",
                "Saltabarranca",
                "San Andrés Tenejapan",
                "San Andrés Tuxtla",
                "San Juan Evangelista",
                "Santiago Tuxtla",
                "Sayula de Alemán",
                "Soconusco",
                "Sochiapa",
                "Soledad Atzompa",
                "Soledad de Doblado",
                "Soteapan",
                "Tamalín",
                "Tamiahua",
                "Tampico Alto",
                "Tancoco",
                "Tantima",
                "Tantoyuca",
                "Tatatila",
                "Castillo de Teayo",
                "Tecolutla",
                "Tehuipango",
                "Álamo Temapache",
                "Tempoal",
                "Tenampa",
                "Tenochtitlán",
                "Teocelo",
                "Tepatlaxco",
                "Tepetlán",
                "Tepetzintla",
                "Tequila",
                "José Azueta",
                "Texcatepec",
                "Texhuacán",
                "Texistepec",
                "Tezonapa",
                "Tierra Blanca",
                "Tihuatlán",
                "Tlacojalpan",
                "Tlacolulan",
                "Tlacotalpan",
                "Tlacotepec de Mejía",
                "Tlachichilco",
                "Tlalixcoyan",
                "Tlalnelhuayocan",
                "Tlapacoyan",
                "Tlaquilpa",
                "Tlilapan",
                "Tomatlán",
                "Tonayán",
                "Totutla",
                "Tuxpan",
                "Tuxtilla",
                "Ursulo Galván",
                "Vega de Alatorre",
                "Veracruz",
                "Villa Aldama",
                "Xoxocotla",
                "Yanga",
                "Yecuatla",
                "Zacualpan",
                "Zaragoza",
                "Zentla",
                "Zongolica",
                "Zontecomatlán de López y Fuentes",
                "Zozocolco de Hidalgo",
                "Agua Dulce",
                "El Higo",
                "Nanchital de Lázaro Cárdenas del Río",
                "Tres Valles",
                "Carlos A. Carrillo",
                "Tatahuicapan de Juárez",
                "Uxpanapa",
                "San Rafael",
                "Santiago Sochiapan"
            ],
            "Yucatán": [
                "Abalá",
                "Acanceh",
                "Akil",
                "Baca",
                "Bokobá",
                "Buctzotz",
                "Cacalchén",
                "Calotmul",
                "Cansahcab",
                "Cantamayec",
                "Celestún",
                "Cenotillo",
                "Conkal",
                "Cuncunul",
                "Cuzamá",
                "Chacsinkín",
                "Chankom",
                "Chapab",
                "Chemax",
                "Chicxulub Pueblo",
                "Chichimilá",
                "Chikindzonot",
                "Chocholá",
                "Chumayel",
                "Dzán",
                "Dzemul",
                "Dzidzantún",
                "Dzilam de Bravo",
                "Dzilam González",
                "Dzitás",
                "Dzoncauich",
                "Espita",
                "Halachó",
                "Hocabá",
                "Hoctún",
                "Homún",
                "Huhí",
                "Hunucmá",
                "Ixil",
                "Izamal",
                "Kanasín",
                "Kantunil",
                "Kaua",
                "Kinchil",
                "Kopomá",
                "Mama",
                "Maní",
                "Maxcanú",
                "Mayapán",
                "Mérida",
                "Mocochá",
                "Motul",
                "Muna",
                "Muxupip",
                "Opichén",
                "Oxkutzcab",
                "Panabá",
                "Peto",
                "Progreso",
                "Quintana Roo",
                "Río Lagartos",
                "Sacalum",
                "Samahil",
                "Sanahcat",
                "San Felipe",
                "Santa Elena",
                "Seyé",
                "Sinanché",
                "Sotuta",
                "Sucilá",
                "Sudzal",
                "Suma",
                "Tahdziú",
                "Tahmek",
                "Teabo",
                "Tecoh",
                "Tekal de Venegas",
                "Tekantó",
                "Tekax",
                "Tekit",
                "Tekom",
                "Telchac Pueblo",
                "Telchac Puerto",
                "Temax",
                "Temozón",
                "Tepakán",
                "Tetiz",
                "Teya",
                "Ticul",
                "Timucuy",
                "Tinum",
                "Tixcacalcupul",
                "Tixkokob",
                "Tixmehuac",
                "Tixpéhual",
                "Tizimín",
                "Tunkás",
                "Tzucacab",
                "Uayma",
                "Ucú",
                "Umán",
                "Valladolid",
                "Xocchel",
                "Yaxcabá",
                "Yaxkukul",
                "Yobaín"
            ],
            "Zacatecas": [
                "Apozol",
                "Apulco",
                "Atolinga",
                "Benito Juárez",
                "Calera",
                "Cañitas de Felipe Pescador",
                "Concepción del Oro",
                "Cuauhtémoc",
                "Chalchihuites",
                "Fresnillo",
                "Trinidad García de la Cadena",
                "Genaro Codina",
                "General Enrique Estrada",
                "General Francisco R. Murguía",
                "El Plateado de Joaquín Amaro",
                "General Pánfilo Natera",
                "Guadalupe",
                "Huanusco",
                "Jalpa",
                "Jerez",
                "Jiménez del Teul",
                "Juan Aldama",
                "Juchipila",
                "Loreto",
                "Luis Moya",
                "Mazapil",
                "Melchor Ocampo",
                "Mezquital del Oro",
                "Miguel Auza",
                "Momax",
                "Monte Escobedo",
                "Morelos",
                "Moyahua de Estrada",
                "Nochistlán de Mejía",
                "Noria de Ángeles",
                "Ojocaliente",
                "Pánuco",
                "Pinos",
                "Río Grande",
                "Sain Alto",
                "El Salvador",
                "Sombrerete",
                "Susticacán",
                "Tabasco",
                "Tepechitlán",
                "Tepetongo",
                "Teúl de González Ortega",
                "Tlaltenango de Sánchez Román",
                "Valparaíso",
                "Vetagrande",
                "Villa de Cos",
                "Villa García",
                "Villa González Ortega",
                "Villa Hidalgo",
                "Villanueva",
                "Zacatecas",
                "Trancoso",
                "Santa María de la Paz"
            ]
        };
        this.estados = Object.keys(this.data);
        this.buildForm();
    }
    ClienteFormComponent.prototype.ngOnInit = function () {
    };
    ClienteFormComponent.prototype.reset = function () {
        this.form.reset();
    };
    ClienteFormComponent.prototype.buildForm = function () {
        this.form = this.formB.group({
            curp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            rfc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            nss: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            apaterno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            amaterno: ['', []],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email],
            calle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            n_ext: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            n_int: [''],
            colonia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            municipio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            cp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            cr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            comentarios: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        });
    };
    ClienteFormComponent.prototype.getMunicipios = function () {
        var edo = this.form.get('estado').value;
        this.municipios = this.data[edo];
    };
    ClienteFormComponent.prototype.saveForm = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.form.valid) {
            console.warn('el formulario es valido');
            this.sClientes.saveCliente(this.form.value)
                .subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    icon: 'success',
                    title: 'Se ha guardado el cliente satisfactoriamente.',
                    showConfirmButton: false,
                    timer: 1500
                }).finally(function () {
                    _this.router.navigateByUrl('listaClientes');
                });
            }, function (err) { return console.error(err); });
        }
        else {
            console.error('el formulario no es valido');
        }
        console.log(this.form.value);
    };
    ClienteFormComponent.ctorParameters = function () { return [
        { type: _services_s_municipios_service__WEBPACK_IMPORTED_MODULE_4__["SMunicipiosService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _services_s_clientes_service__WEBPACK_IMPORTED_MODULE_3__["SClientesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    ClienteFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-cliente-form',
            template: _raw_loader_cliente_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_cliente_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_s_municipios_service__WEBPACK_IMPORTED_MODULE_4__["SMunicipiosService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _services_s_clientes_service__WEBPACK_IMPORTED_MODULE_3__["SClientesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ClienteFormComponent);
    return ClienteFormComponent;
}());



/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"sidebar\"><app-sidebar></app-sidebar></div>\r\n  <div class=\"main-panel\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n<div class=\" fixed-plugin\">\r\n  <div class=\" show-dropdown\" ngbDropdown>\r\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\r\n      <i class=\" fa fa-cog fa-2x\"> </i>\r\n    </a>\r\n    <ul ngbDropdownMenu>\r\n      <li class=\" header-title\">Sidebar Background</li>\r\n      <li class=\" adjustments-line\">\r\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\r\n          <div class=\" badge-colors text-center\">\r\n            <span\r\n              class=\" badge filter badge-danger\"\r\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\r\n            >\r\n            </span>\r\n            <span\r\n              class=\" badge filter badge-primary\"\r\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\r\n            >\r\n            </span>\r\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\r\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\r\n            </span>\r\n          </div>\r\n          <div class=\" clearfix\"></div>\r\n        </a>\r\n      </li>\r\n      <li class=\" adjustments-line text-center color-change\">\r\n        <span class=\" color-label\"> LIGHT MODE </span>\r\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\r\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\r\n        <span class=\" color-label\"> DARK MODE </span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "FkQd":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n  <a [routerLink]=\"['dashboard']\" class=\"simple-text logo-mini\">\r\n    <div class=\"logo-img\">\r\n      <img src=\"./assets/img/angular2-logo-white.png\" />\r\n    </div>\r\n  </a>\r\n  <a [routerLink]=\"['dashboard']\" class=\"simple-text logo-normal\">\r\n    GENEFA\r\n  </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n  <ul class=\"nav\">\r\n    <li\r\n      routerLinkActive=\"active\"\r\n      *ngFor=\"let menuItem of menuItems\"\r\n      class=\"{{ menuItem.class }} nav-item\"\r\n    >\r\n      <a [routerLink]=\"[menuItem.path]\">\r\n        <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\r\n        <p>{{ menuItem.title }}</p>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-footer",
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        this.sidebarColor = "red";
    }
    AdminLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AdminLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    AdminLayoutComponent.ctorParameters = function () { return []; };
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-admin-layout",
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\r\n  <div class=\" container-fluid\">\r\n    <div class=\" navbar-wrapper\">\r\n      <div class=\" navbar-toggle d-inline\">\r\n        <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n          <span class=\" navbar-toggler-bar bar1\"> </span>\r\n          <span class=\" navbar-toggler-bar bar2\"> </span>\r\n          <span class=\" navbar-toggler-bar bar3\"> </span>\r\n        </button>\r\n      </div>\r\n      <a class=\" navbar-brand\" href=\"javascript:void(0)\"> {{ getTitle() }} </a>\r\n    </div>\r\n    <button\r\n      aria-label=\"Toggle navigation\"\r\n      class=\" navbar-toggler\"\r\n      (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      aria-controls=\"collapseExample\"\r\n      id=\"navigation\"\r\n      type=\"button\"\r\n    >\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n    </button>\r\n    <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\r\n      <ul class=\" navbar-nav ml-auto\">\r\n        <li class=\" search-bar input-group\">\r\n          <button\r\n            class=\" btn btn-link\"\r\n            data-target=\"#searchModal\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"open(content)\"\r\n            id=\"search-button\"\r\n          >\r\n            <i class=\" tim-icons icon-zoom-split\"> </i>\r\n            <span class=\" d-lg-none d-md-block\"> Buscar </span>\r\n          </button>\r\n        </li>\r\n        <li class=\" nav-item\" ngbDropdown>\r\n          <a\r\n            class=\" nav-link\"\r\n            data-toggle=\"dropdown\"\r\n            href=\"javascript:void(0)\"\r\n            ngbDropdownToggle\r\n          >\r\n            <div class=\" photo\">\r\n              <img alt=\"Profile Photo\" src=\"assets/img/anime3.png\" />\r\n            </div>\r\n            <b class=\" caret d-none d-lg-block d-xl-block\"> </b>\r\n            <p class=\" d-lg-none\">Nombre de usuario</p>\r\n          </a>\r\n          <ul class=\" dropdown-navbar\" ngbDropdownMenu>\r\n            <li class=\" nav-link\">\r\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                Perfil\r\n              </a>\r\n            </li>\r\n            <li class=\" dropdown-divider\"></li>\r\n            <li class=\" nav-link\">\r\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                Cerrar sesion\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\" separator d-lg-none\"></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\" modal-header\">\r\n    <input\r\n      class=\" form-control\"\r\n      id=\"inlineFormInputGroup\"\r\n      placeholder=\"SEARCH\"\r\n      type=\"text\"\r\n    />\r\n\r\n    <button\r\n      aria-label=\"Close\"\r\n      class=\" close\"\r\n      data-dismiss=\"modal\"\r\n      type=\"button\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <i class=\" tim-icons icon-simple-remove\"> </i>\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "black-dashboard-angular";
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "WSaj":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"sidebar\">\r\n    <div class=\"logo\">\r\n      <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-sidebar-logo\" class=\"simple-text logo-mini\">\r\n        <div class=\"logo-img\">\r\n          <img src=\"./assets/img/angular2-logo-white.png\" />\r\n        </div>\r\n      </a>\r\n      <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-sidebar-logo\" class=\"simple-text logo-normal\">\r\n        الإبداعية تيم\r\n      </a>\r\n    </div>\r\n    <div class=\"sidebar-wrapper\">\r\n      <ul class=\"nav\">\r\n        <li\r\n          routerLinkActive=\"active\"\r\n          *ngFor=\"let menuItem of menuItems\"\r\n          class=\"{{ menuItem.class }} nav-item\"\r\n        >\r\n          <a [routerLink]=\"[menuItem.path]\">\r\n            <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\r\n            <p>{{ menuItem.rtlTitle }}</p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"main-panel\">\r\n    <nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\r\n      <div class=\" container-fluid\">\r\n        <div class=\" navbar-wrapper\">\r\n          <div class=\" navbar-toggle d-inline\">\r\n            <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n              <span class=\" navbar-toggler-bar bar1\"> </span>\r\n              <span class=\" navbar-toggler-bar bar2\"> </span>\r\n              <span class=\" navbar-toggler-bar bar3\"> </span>\r\n            </button>\r\n          </div>\r\n          <a class=\" navbar-brand\" href=\"javascript:void(0)\"> ار تي ال </a>\r\n        </div>\r\n        <button\r\n          aria-label=\"Toggle navigation\"\r\n          class=\" navbar-toggler\"\r\n          (click)=\"collapse()\"\r\n          [attr.aria-expanded]=\"!isCollapsed\"\r\n          aria-controls=\"collapseExample\"\r\n          id=\"navigation\"\r\n          type=\"button\"\r\n        >\r\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n        </button>\r\n        <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\r\n          <ul class=\" navbar-nav mr-auto\">\r\n            <li class=\" search-bar input-group\">\r\n              <button\r\n                class=\" btn btn-link\"\r\n                data-target=\"#searchModal\"\r\n                data-toggle=\"modal\"\r\n                (click)=\"open(content)\"\r\n                id=\"search-button\"\r\n              >\r\n                <i class=\" tim-icons icon-zoom-split\"> </i>\r\n                <span class=\" d-lg-none d-md-block\"> بحث </span>\r\n              </button>\r\n            </li>\r\n            <li class=\" nav-item\" ngbDropdown>\r\n              <a\r\n                class=\" nav-link\"\r\n                data-toggle=\"dropdown\"\r\n                ngbDropdownToggle\r\n              >\r\n                <div class=\" notification d-none d-lg-block d-xl-block\"></div>\r\n                <i class=\" tim-icons icon-sound-wave\"> </i>\r\n                <p class=\" d-lg-none\">إخطارات</p>\r\n              </a>\r\n              <ul class=\" dropdown-menu-right dropdown-navbar\" ngbDropdownMenu>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    ورد مايك جون على بريدك الإلكتروني\r\n                  </a>\r\n                </li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    لديك 5 مهام أخرى\r\n                  </a>\r\n                </li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    صديقك مايكل في المدينة\r\n                  </a>\r\n                </li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    إشعار آخر\r\n                  </a>\r\n                </li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    واحدة أخرى\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li class=\" nav-item\" ngbDropdown>\r\n              <a\r\n                class=\" nav-link\"\r\n                data-toggle=\"dropdown\"\r\n                ngbDropdownToggle\r\n              >\r\n                <div class=\" photo\">\r\n                  <img alt=\"Profile Photo\" src=\"assets/img/anime3.png\" />\r\n                </div>\r\n                <b class=\" caret d-none d-lg-block d-xl-block\"> </b>\r\n                <p class=\" d-lg-none\">الخروج</p>\r\n              </a>\r\n              <ul class=\" dropdown-navbar\" ngbDropdownMenu>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    الملف الشخصي\r\n                  </a>\r\n                </li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    الإعدادات\r\n                  </a>\r\n                </li>\r\n                <li class=\" dropdown-divider\"></li>\r\n                <li class=\" nav-link\">\r\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\r\n                    الخروج\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li class=\" separator d-lg-none\"></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n    <footer class=\" footer\">\r\n      <div class=\" container-fluid\">\r\n        <ul class=\" nav\">\r\n          <li class=\" nav-item\">\r\n            <a class=\" nav-link\" href=\"https://www.creative-tim.com?ref=bda-auth-layout-footer\">\r\n              تيم الإبداعية\r\n            </a>\r\n          </li>\r\n          <li class=\" nav-item\">\r\n            <a class=\" nav-link\" href=\"https://www.creative-tim.com/about-us?ref=bda-auth-layout-footer\">\r\n              معلومات عنا\r\n            </a>\r\n          </li>\r\n          <li class=\" nav-item\">\r\n            <a class=\" nav-link\" href=\"http://blog.creative-tim.com?ref=bda-auth-layout-footer\"> مدونة </a>\r\n          </li>\r\n        </ul>\r\n        <div class=\" copyright\">\r\n          &copy; {{ test | date: \"yyyy\" }} مصنوع من\r\n          <i class=\" tim-icons icon-heart-2\"> </i> بواسطة\r\n          <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-footer\" target=\"_blank\"> تيم الإبداعية </a>\r\n          من أجل شبكة أفضل.\r\n        </div>\r\n      </div>\r\n    </footer>\r\n\r\n  </div>\r\n</div>\r\n<div class=\" fixed-plugin\">\r\n  <div class=\" show-dropdown\" ngbDropdown>\r\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\r\n      <i class=\" fa fa-cog fa-2x\"> </i>\r\n    </a>\r\n    <ul ngbDropdownMenu>\r\n      <li class=\" header-title\">خلفية الشريط الجانبي</li>\r\n      <li class=\" adjustments-line\">\r\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\r\n          <div class=\" badge-colors text-center\">\r\n            <span\r\n              class=\" badge filter badge-danger\"\r\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\r\n            >\r\n            </span>\r\n            <span\r\n              class=\" badge filter badge-primary\"\r\n              data-color=\"primary\"\r\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\r\n            >\r\n            </span>\r\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\r\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\r\n            </span>\r\n          </div>\r\n          <div class=\" clearfix\"></div>\r\n        </a>\r\n      </li>\r\n      <li class=\" adjustments-line text-center color-change\">\r\n        <span class=\" color-label\"> وضع الضوء </span>\r\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\r\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\r\n        <span class=\" color-label\"> وضع الظلام</span>\r\n      </li>\r\n      <li class=\" button-container\">\r\n        <a\r\n          class=\" btn btn-primary btn-block btn-round\"\r\n          href=\"https://www.creative-tim.com/product/black-dashboard-angular?ref=bda-auth-layout-fixed-plugin\"\r\n          target=\"_blank\"\r\n        >\r\n          التحميل الان\r\n        </a>\r\n        <a\r\n          class=\" btn btn-default btn-block btn-round\"\r\n          href=\"https://demos.creative-tim.com/black-dashboard-angular/#/documentation/tutorial?ref=bda-auth-layout-fixed-plugin\"\r\n          target=\"_blank\"\r\n        >\r\n          كابل بيانات\r\n        </a>\r\n      </li>\r\n      <li class=\" header-title\">شكرا لك على 95 سهم!</li>\r\n      <li class=\" button-container text-center\">\r\n        <button class=\" btn btn-round btn-info\" id=\"twitter\">\r\n          <i class=\" fab fa-twitter\"> </i> · 45\r\n        </button>\r\n        <button class=\" btn btn-round btn-info\" id=\"facebook\">\r\n          <i class=\" fab fa-facebook-f\"> </i> · 50\r\n        </button>\r\n        <br />\r\n\r\n        <br />\r\n\r\n        <a\r\n          aria-label=\"Star ntkme/github-buttons on GitHub\"\r\n          class=\" github-button\"\r\n          data-icon=\"octicon-star\"\r\n          data-show-count=\"true\"\r\n          data-size=\"large\"\r\n          href=\"https://github.com/creativetimofficial/black-dashboard-angular?ref=bda-auth-layout-fixed-plugin\"\r\n        >\r\n          نجمة\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n    <ng-template #content let-modal>\r\n      <div class=\" modal-header\">\r\n        <input\r\n          class=\" form-control\"\r\n          id=\"inlineFormInputGroup\"\r\n          placeholder=\"بحث\"\r\n          type=\"text\"\r\n        />\r\n\r\n        <button\r\n          aria-label=\"Close\"\r\n          class=\" close\"\r\n          data-dismiss=\"modal\"\r\n          type=\"button\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          <i class=\" tim-icons icon-simple-remove\"> </i>\r\n        </button>\r\n      </div>\r\n\r\n    </ng-template>\r\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\" footer\">\r\n  <div class=\" container-fluid\">\r\n    <ul class=\" nav\">\r\n      <li class=\" nav-item\">\r\n        <a class=\" nav-link\" href=\"https://www.creative-tim.com?ref=bda-footer\">\r\n          Creative Tim\r\n        </a>\r\n      </li>\r\n      <li class=\" nav-item\">\r\n        <a class=\" nav-link\" href=\"https://www.creative-tim.com/about-us?ref=bda-footer\">\r\n          About Us\r\n        </a>\r\n      </li>\r\n      <li class=\" nav-item\">\r\n        <a class=\" nav-link\" href=\"http://blog.creative-tim.com?ref=bda-footer\"> Blog </a>\r\n      </li>\r\n    </ul>\r\n    <div class=\" copyright\">\r\n      &copy; {{ test | date: \"yyyy\" }} made with\r\n      <i class=\" tim-icons icon-heart-2\"> </i> by\r\n      <a href=\"https://www.creative-tim.com?ref=bda-footer\" target=\"_blank\"> Creative Tim </a>\r\n      for a better web.\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__["AuthLayoutComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ccX7":
/*!************************************************!*\
  !*** ./src/app/services/s-clientes.service.ts ***!
  \************************************************/
/*! exports provided: SClientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SClientesService", function() { return SClientesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var SClientesService = /** @class */ (function () {
    function SClientesService(http) {
        this.http = http;
        this.base_url = 'https://genefapi.herokuapp.com/api/';
    }
    SClientesService.prototype.getAllClientes = function () {
        return this.http.get(this.base_url + "clientes");
    };
    SClientesService.prototype.saveCliente = function (data) {
        return this.http.post(this.base_url + "clientes", data);
    };
    SClientesService.prototype.getClienteByID = function (id) {
        return this.http.get(this.base_url + "clientes/" + id);
    };
    SClientesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SClientesService);
    return SClientesService;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"PTPi",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, modalService) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.modalService = modalService;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("resize", this.updateColor);
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                //asign a function
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    };
    NavbarComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NavbarComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener("resize", this.updateColor);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-navbar",
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cliente-form/cliente-form.component */ "ADbd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_8__["ClienteFormComponent"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_8__["ClienteFormComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "raJY":
/*!**************************************************!*\
  !*** ./src/app/services/s-municipios.service.ts ***!
  \**************************************************/
/*! exports provided: SMunicipiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMunicipiosService", function() { return SMunicipiosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var SMunicipiosService = /** @class */ (function () {
    function SMunicipiosService(http) {
        this.http = http;
        this.TOKEN = '112a9ef1-9f7e-4973-9653-c0a94f05a016';
    }
    SMunicipiosService.prototype.getEstados = function () {
        return this.http.get("https://api-sepomex.hckdrk.mx/query/get_estados?token=" + this.TOKEN);
    };
    SMunicipiosService.prototype.getMunicipios = function (estado) {
        return this.http.get("https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/" + estado + "?token=" + this.TOKEN);
    };
    SMunicipiosService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SMunicipiosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SMunicipiosService);
    return SMunicipiosService;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");







var routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: "",
                loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    },
    {
        path: "**",
        redirectTo: "dashboard"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ROUTES = [
    {
        path: "/dashboard",
        title: "Dashboard",
        rtlTitle: "لوحة القيادة",
        icon: "icon-chart-pie-36",
        class: ""
    },
    {
        path: "/nCliente",
        title: "Nuevo cliente",
        rtlTitle: "الرموز",
        icon: "icon-simple-add",
        class: ""
    },
    {
        path: "/listaClientes",
        title: "Lista de clientes",
        rtlTitle: "خرائط",
        icon: "icon-notes",
        class: ""
    },
    {
        path: "/nTramite",
        title: "Nuevo tramite",
        rtlTitle: "إخطارات",
        icon: "icon-simple-add",
        class: ""
    },
    {
        path: "/listaTramites",
        title: "Lista de tramites",
        rtlTitle: "ملف تعريفي للمستخدم",
        icon: "icon-notes",
        class: ""
    },
    {
        path: "/tables",
        title: "Table List",
        rtlTitle: "قائمة الجدول",
        icon: "icon-puzzle-10",
        class: ""
    },
    {
        path: "/typography",
        title: "Typography",
        rtlTitle: "طباعة",
        icon: "icon-align-center",
        class: ""
    }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-sidebar",
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
 =========================================================
 * Black Dashboard Angular - v1.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map