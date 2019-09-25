

if ('serviceWorker' in navigator) {

    navigator.serviceWorker.getRegistrations().then(function(registration) {
        alert("Service Worker Registered");
        socket_messages();
    }).catch(function(err) {
        alert("Service Worker Failed to Register", err);
    })

    // navigator.serviceWorker
    //     .register('service-worker.js', { scope: './' })
    //     .then(function(registration) {
    //         console.log("Service Worker Registered");
    //         socket_messages();
    //     })
    //     .catch(function(err) {
    //         console.log("Service Worker Failed to Register", err);
    //     })

}


window.socket = io.connect( 'http://pcam.podomorouniversity.ac.id:3000/' );

function socket_messages(){

    socket.on( 'mobile_notif', function( data ) {

        alert('ok');

        showLocalNotif(data.dataNotification.Title,data.dataNotification.Message);

        // console.log(data);
        //
        // var UserToken = localStorage.getItem('UserToken');
        // var dataUser = jwt_decode(UserToken,'MUAP)(*');
        //
        // var sessionNPM = dataUser.NPM;
        //
        // var arrUser = data.dataNotification.dataUser;
        //
        // // if (data.mobile_notif == 1) {
        // if($.inArray(''+sessionNPM,arrUser)!=-1){
        //     showLocalNotif(data.dataNotification.Title,data.dataNotification.Message);
        // }

    }); // exit socket

    function showLocalNotif(Title,Message) {
        cordova.plugins.notification.local.schedule({
            title: Title,
            text: Message,
            smallIcon: 'res://ic_stat_logo_pu_notif',
            icon: 'http://pcam.podomorouniversity.ac.id/images/icon_right.png'
        });

    }
}





