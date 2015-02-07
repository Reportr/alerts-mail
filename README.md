# Mail Alerts for Reportr

### How to add it to your instance?

Add `reportr-alerts-ail` to the `package.json` and load it in your Reportr configuration:

```js
reportr.configure({
    alerts: [
        require("reportr-alerts-mail")({
            'service': process.env.MAIL_SERVICE,
            'auth': {
                'user': process.env.MAIL_USERNAME,
                'password': process.env.MAIL_PASSWORD
            },
            'from': process.env.MAIL_FROM
        })
    ]
});
```
