var socket = io();
           
socket.on('connect', function(){
    console.log('Connected to Server');

    
 socket.emit('createEmail', {
     to: 'j@exmp.com',
     text: 'hey there . This is Gurman'
 });
});

 socket.on('disconnect', function(){
    console.log('Disconnected from Server');
});

socket.on('newEmail' , function(email){
    console.log('new Email is ' , email);
 
})
