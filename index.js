var Q = require('q');
var _ = require('lodash');
var nodemailer = require("nodemailer");

module.exports = function(options) {
    var exec = function(alert, alertConfig, e) {
        var deferred = Q.defer();

        var transport = nodemailer.createTransport("SMTP", {
            service: options.service,
            auth: options.auth
        });

        var content = [
            "Alert Notification for <b>"+alert.eventName+"</b>"
        ].join("<br/>\n");

        transport.sendMail({
            from: options.from,
            to: alertConfig.to,
            subject: "Reportr - Alert - "+alert.eventName,
            text: "",
            html: content
        }, function(error, response){
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve();
            }
        });

        return deferred.promise;
    };

    return {
        id: "mail",
        title: "Mail",
        execute: exec,
        options: {
            to: {
                type: "text",
                label: "To",
                help: "Addresses separated by commas"
            }
        }
    };
};
