const miniplug = require('miniplug');

const mp = miniplug();

// Join a room
mp.join('nightcore').then((room) => {
    mp.getRoomHistory().then((history) => {
        for(let hid of history){
          console.log(hid.media.cid);
        }
        process.exit();
    });
})
