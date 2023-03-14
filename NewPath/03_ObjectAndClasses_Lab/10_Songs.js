function solve([numberOfSongs,...rest]) {
    class Song {
        constructor (album, name, duration) {
            this.album =album;
            this.name = name;
            this.duration = duration;
        }
    }
    let requireAlbum = rest[rest.length-1];
    if(requireAlbum === 'all') {
for (let i = 0; i < rest.length - 1; i++) {
let[_album, song] = rest[i].split("_");;
console.log(song);
}
    }else {
        for (let i = 0; i < rest.length - 1; i++) {
            let[album, song] = rest[i].split("_");
            if (album === requireAlbum) {
                console.log(song);
            }
            }
    }
}
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );
