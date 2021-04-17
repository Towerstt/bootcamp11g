/* CREATE USERS 
https://ajaxclass-1ca34.firebaseio.com/11g/drinktim/users.json
*/

/* METODOS HTTP */
const getUser = () => {
    let usersCollection;

    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/drinktim/users.json",
        success: (response) => {
            usersCollection = response;
        },
        error: (error) => {
            console.log(error);
        },
        async: false,
    });
    return usersCollection;
};

const postUser = newReply => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/drinktim/users.json",
        data: JSON.stringify(newReply),
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};
const deleteUser = (key) => {
    $.ajax({
      method: "DELETE",
      url: `https://ajaxclass-1ca34.firebaseio.com/11g/drinktim/users/${key}.json`,
      success: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  
/* METODOS LOGICA */

const setUserData = () => {
    let inputGroup = $('#new-user .form-control-xl')
    //console.log(inputGroup)
    let userId = Date.now();
    let newUser = {};
    $.each(inputGroup, (idx, currentInput)=> {
        newUser[currentInput.name] = currentInput.value 
    })
    newUser = {
        ...newUser,
        userId
    };
    console.log(newUser);
    postUser(newUser);
}

$('#save-user').click(setUserData);

const selectUsers = usersCollection => {
    let idx = 0;
    let optionHtml;
    for ( key in usersCollection) {
        let { userId, avatar, username } = usersCollection[key];
        if(idx==0){
            optionHtml = `<option value=${userId} selected>${username}</option>`
            $('#img-avatar').attr('src', avatar)
            $('#data-load').attr('value',JSON.stringify(usersCollection[key]));
        }else {
            optionHtml = `<option value=${userId}>${username}</option>`
        }
        $('#users').append(optionHtml);
        idx++;
    }
}

selectUsers(getUser());


$('#save-user-modal').click(()=>{
    let userId = $('#users option:selected').val()
    
    console.log(userId)
    let filteredUser = filteredById(userId);
    const { avatar } = filteredUser;
    $('#img-avatar').attr('src', avatar)
    $('#change-user-modal').modal('hide')
    $('#data-load').attr('data-user',JSON.stringify(filteredUser));
})

const filteredById = userId => {
    let selectedUser = Object.values(getUser()).find(user => user.userId == userId);
    return selectedUser;
}