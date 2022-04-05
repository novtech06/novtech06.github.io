const flashData = $('.flash-data').data('flashdata');
const mahasiswa = 'naufal';

if(flashData){
    Swal.fire({
        title: 'Data Mahasiswa',
        text: 'Berhasil ' + flashData,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

//  tombol hapus
$('.tombol-hapus').on('click', function (e) {
    e.preventDefault();
    const href = $(this).attr('href');

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger mr-3'
        },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: 'Apakah anda yakin?',
        text: "data mahasiswa akan dihapus!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batalkan',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            document.location.href = href;
        } else if (
          /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            'Dibatalkan',
            'data mahasiswa ' + mahasiswa + ' tidak dihapus, masih aman :)',
            'error'
        )
        }
    })

}); 