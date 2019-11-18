      function check_validation_form() {

        //отримання значення поля email
        var email = document.getElementById('email');
        var name = document.getElementById('name');

        //використовуємо регулярний вираз для перевірки
        var filter_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

       //вираз {2,50} мінімум 2 символи, максимум 50
        var filter_name=/^[a-zA-Z]{2,50}$/;
        
       //перевірка поля email
        if (!filter_email.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus;
            return false;
        }


       //перевірка поля name
        if (!filter_name.test(name.value)) {
            alert('Please input a valid name');
            name.focus;
            return false;
        }

    }
