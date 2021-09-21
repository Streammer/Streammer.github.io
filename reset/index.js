var app = new window.Webex.Application()

app.onReady()
    .then(() => console.log('app is ready'))


app.listen('application:displayContextChanged', (payload) => log('application:displayContextChanged', payload));
app.listen('application:shareStateChanged', (payload) => log('application:shareStateChanged', payload));
app.listen('application:themeChanged', (payload) => log('application:themeChanged', payload));
app.listen('meeting:infoChanged', (payload) => log('meeting:infoChanged', payload));
app.listen('meeting:roleChanged', (payload) => log('meeting:roleChanged', payload));
app.listen('space:infoChanged', (payload) => log('space:infoChanged', payload));