let userInput = prompt('Dear User, enter your E-mail please ^_^)');
let userPass;
let changeConfirmation;
let userPassNew;
let userPassOld;
let userPassNewConfirm;

const passLength = 5;
const emailLength = 6; 

if (userInput === '' || userInput === null) {
    alert('Canceled.');
} else if (userInput.length < emailLength) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (userInput === 'user@gmail.com' || userInput === 'admin@gmail.com') {
    userPass = prompt('Dear User, enter your Password please ^_^)');
    if (userPass === '' || userPass === null) {
        alert('Canceled.');
    } else if (userInput === 'user@gmail.com' && userPass === 'UserPass'
         || userInput === 'admin@gmail.com' && userPass === 'AdminPass') {
        changeConfirmation = confirm('Do you want to change your password?');
        if (changeConfirmation) {
            userPassOld = prompt('Dear User, please enter the old password');
            if (userPassOld === userPass) {
                userPassNew = prompt('Dear User, please enter your new password');
                if (userPassNew.length < passLength) {
                    alert('It\'s too short password. Sorry.');
                } else {
                    userPassNewConfirm = prompt('Dear User, please enter your new password again');
                    if (userPassNewConfirm === userPassNew) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }    
} else {
    alert('I don\'t know you');
}
