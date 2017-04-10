var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var app = require("application");
var frameModule = require("ui/frame");
var phone = require("../../shared/phone-details");

var page;

var pageData = new observableModule.fromObject({
    menuItems: new ObservableArray([{
            name: "Platform specific code"
        }
    ])
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = pageData;


};

exports.listviewItemTap = function (args) {

    var topmost = frameModule.topmost();
    var phoneModel = phone.getModel();

    switch (args.index) {
        case 0:

            if (page.android) {

                var Toast = android.widget.Toast;
                Toast.makeText(app.android.context, phoneModel, Toast.LENGTH_SHORT).show();
            }
            if (page.ios) {
                // Toasts for ios
            }

            break;

    }

}