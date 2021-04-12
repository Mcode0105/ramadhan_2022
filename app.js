$(document).ready(function () {
    (async () => {
        const { value: text } = await Swal.fire({
          title: 'Masukan Nama Anda ',
          input: 'text',
          inputLabel: 'Nama anda atau nama keluarga anda',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        if (text) {
            let nama = $('.ml16').html(`<span style="text-align: center;" class='letter' > Assalamualaikum ${text}, semoga kamu selalu dalam lindungan Allah SWT , Amiinn</span>`)
            var audio = new Audio('lagu-ramadahan.mp3');
            audio.play();
            anime.timeline({loop: true})
            .add({
              targets: '.ml16 .letter',
              translateY: [-100,0],
              easing: "easeOutExpo",
              duration: 1500,
              delay: (el, i) => 30 * i
            }).add({
              targets: '.ml16',
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 1000
            });
            const url = `https://api.telegram.org/bot1695891958:AAF9nshsMlM6eTfZUFZPMfGVsBAn5qHuJXs/sendMessage?chat_id=-441996994&text=${text}, telah mengunjungi aplikasi anda`;
            $.ajax({
                type: "GET",
                url: url,
                dataType: "json",
                success: function (response) {
                    console.log(response);
                }
            });        
        }
        })() 
});
$('#tombol').click(function(){ 
    $('#tanya').toggle('slow');
});
$('#iya').click(function () { 
    (async () => {
        const { value: nama } = await Swal.fire({
          title: 'Nama Anda ',
          input: 'text',
          inputLabel: 'Nama anda atau nama keluarga anda',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        if (nama) {
            $('#ucapan').show();
            $('#ucapanuatama').slideUp();
            $('#textucapan').text(`assalamualaikum saya ,${nama} & Keluarga Mengucapkan Selamat Menuanaikan ibadah puasa 1442 H `);
            }
        })() 
    
});
$('#tidak').click(function () { 
    Swal.fire({
        title: 'Terima Kasih semoga bermanfaat.!! ',
        icon : 'success',
       
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
});
window.setInterval("waktu()", 1000);
    function waktu() {
        let waktu = new Date();
        setTimeout("waktu", 1000);
        document.getElementById('date').innerHTML =
         waktu.getHours() + ':' + waktu.getMinutes() + ':'
          + waktu.getSeconds()+ ', ' + waktu.getDate() +
           '-'+ waktu.getMonth()+ '-' + waktu.getFullYear();
    }
  