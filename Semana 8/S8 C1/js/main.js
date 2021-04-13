let photoArray = [100, 200, 350, 400, 500, 600, 700, 800, 999]
for (let i = 0; i < photoArray.length; i++){
    photoArray[i] = `https://picsum.photos/id/${photoArray[i]}/1177/321`
}
let a = 0

$("#btn-next").on('click', () =>{
    a > -1 ? $('#btn-prev').prop('disabled', false) : $('#btn-prev').prop('disabled', true)
    $("img").attr("src", photoArray[a])
    a++
    a > 8 ? $('#btn-next').prop('disabled', true) && $('#btn-prev').prop('disabled', false) && $('img').attr('src', 'https://githubfieldday.com/mex2018/assets/kodemia.png') : $('#btn-next').prop('disabled', false)
})

$("#btn-prev").on('click', () =>{
    a < 8 ? $('#btn-next').prop('disabled', false) : $('#btn-prev').prop('disabled', true)
    $("img").attr("src", photoArray[a])
    a--
    a < 0 ? $('#btn-prev').prop('disabled', true) && $('#btn-next').prop('disabled', false) && $('img').attr('src', 'https://githubfieldday.com/mex2018/assets/kodemia.png'): $('#btn-prev').prop('disabled', false)
})

$('#btn-home').click(() =>{
    $('img').attr('src', 'https://githubfieldday.com/mex2018/assets/kodemia.png')
    $('#btn-next').prop('disabled', false)
    $('#btn-prev').prop('disabled', true)
    a = 0
})