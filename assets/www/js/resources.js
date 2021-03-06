var Translation = {
    userLang: 'CA',
    _initLang: function() {
		var lang= window.localStorage.getItem("user.idioma");
		if(lang==null || (lang!='CA' && lang!='ES' && lang!='EN'))lang='CA';
        this.userLang = lang;						
    },
    strTrans: {//10
    'EN': {'0':'Error: incorrect user',
		   '1':'CATALOG',
		   '2':'NOTIFICATION',
		   '3':'COMPANY',
		   '4':'CLIENTS',
		   '5':'CREATE PRODUCT',
		   'category':'CATEGORIES',
		   '6':'USERNAME',
		   '7':'PASSWORD',
		   '8':'ENTER',
		   '9':'There is not internet connection. You can not see new clients or modify or create clients',
		   '10':'There is not internet connection',
		   'labelidioma':'Language',
		   'labelrole':'Role',
		   'headerInsertUsers':'Create User',
		   'tel':'TELEPHONE',
		   'headerInfoUser':'Information User',
		   'menuFot': 'MENU',
		   'insertFot':'NEW USER',
		   'logOutFot':'LOG OUT',
		   'userToDelete':'DELETE USER',
		   'buttonSaveClient':'SAVE CLIENT',
		   'labelSubSubCategories':'SubSub Categories',
		   'labelSubCategories':'Sub Categories',
		   'labelCategories':'Categories',
		   'newCat':'NEW CATEGORY',
		   'newSubCat':'NEW SUB CATEGORY',
		   'newSubSubCat':'NEW SUBSUB CATEGORY',
		   'changeCompany':'CHANGE COMPANY',
		   'labelCompany':'COMPANIES',
		   'headerNotificacions':'NOTIFICATIONS',
		   'headerNotificacionsEnvia':'Search User',
		   'menuEnvia':'SEND NOTIF',
		   'newCompany':'COMPANY NAME',
		   'descCompany1':'DESC 1',
		   'descCompany2':'DESC 2',
      }, 
    'CA': {'0':'Error: usuari incorrecte',
		   '1':'CATÀLEG',
		   '2':'NOTIFICACIÓ',
		   '3':'EMPRESA',
		   '4':'CLIENTS',
		   '5':'CREA PRODUCTE',
		   'category':'CATEGORIES',
		   '6':'USUARI',
		   '7':'PASSWORD',
		   '8':'ENTRA',
		   '9':'No hi ha internet disponible. No es podran veure nous clients ni realitzar operacions sobre aquests',
		   '10':'No hi ha connecció internet',
		   'labelidioma':'Idioma',
		   'labelrole':'Rol',
		   'headerInsertUsers':'Crea Usuari',
		   'tel':'TELÈFON',
		   'headerInfoUser':'Informació Usuari',
		   'menuFot': 'MENU',
		   'insertFot':'NOU USUARI',
		   'logOutFot':'SORTIR',
		   'userToDelete':'BORRAR USUARI',
		   'buttonSaveClient':'GUARDAR CLIENT',
		   'labelSubSubCategories':'SubSub Categories',
		   'labelSubCategories':'Sub Categories',
		   'labelCategories':'Categories',
		   'newCat':'NOVA CATEGORIA',
		   'newSubCat':'NOVA SUB CATEGORIA',
		   'newSubSubCat':'NOVA SUBSUB CATEGORIA',
		   'changeCompany':'CANVIA COMPANY',
		   'labelCompany':'COMPANYIES',
		   'headerNotificacions':'NOTIFICACIONS',
		   'headerNotificacionsEnvia':'Busca User',
		   'menuEnvia':'ENVIA NOTIF',
		   'newCompany':'COMPANYIA NOM',
		   'descCompany1':'DESC 1',
		   'descCompany2':'DESC 2',
      }, 
	'ES': {'0':'Error: usuario incorrecto',
	       '1':'CATÁLOGO',
		   '2':'NOTIFICACIÓN',
		   '3':'EMPRESA',
		   '4':'CLIENTES',
		   '5':'CREA PRODUCTO',
		   'category':'CATEGORIAS',
		   '6':'USUARIO',
		   '7':'PASSWORD',
		   '8':'ENTRA',
		   '9':'No hay internet disponible. No se podran ver nuevos clientes ni realitzar operaciones sobre estos',
		   '10':'No hay connexión de internet',
		   'labelidioma':'Idioma',
		   'labelrole':'Role',
		   'headerInsertUsers':'Create User',
		   'tel':'TELEFONO',
		   'headerInfoUser':'Información Usuario',
		   'menuFot': 'MENU',
		   'insertFot':'NUEVO USUARIO',
		   'logOutFot':'SALIR',
		   'userToDelete':'BORRAR USUARIO',
		   'buttonSaveClient':'GUARDAR CLIENTE',
		   'labelSubSubCategories':'SubSub Categorias',
		   'labelSubCategories':'Sub Categorias',
		   'labelCategories':'Categorias',
		   'newCat':'NUEVA CATEGORIA',
		   'newSubCat':'NUEVA SUB CATEGORIA',
		   'newSubSubCat':'NUEVA SUBSUB CATEGORIA',
		   'changeCompany':'CAMBIA COMPANY',
		   'labelCompany':'COMPAÑIAS',
		   'headerNotificacions':'NOTIFICACIONES',
		   'headerNotificacionsEnvia':'Busca User',
		   'menuEnvia':'ENVIA NOTIF',
		   'newCompany':'COMPAÑIA NOMBRE',
		   'descCompany1':'DESC 1',
		   'descCompany2':'DESC 2',
      }
    },
    getText: function(num) {
			console.log("lang....."+this.userLang);
        if (typeof this.strTrans[this.userLang] !== "undefined") {
            cadena = this.strTrans[this.userLang][num];
        }
       if(typeof cadena == "undefined") cadena = "";
 
		return cadena;
    }
}
Translation._initLang();