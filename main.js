const form1 = document.querySelector('.feedback__form');
const form2 = document.querySelector('.find-as__form');

function sendForTelegramForm1(item) {
    $(item).on('submit', function (event) {

        event.stopPropagation();
        event.preventDefault();
    
        let form = this,
            submit = $('.submit', form),
            data = new FormData(),
            files = $('input[type=file]'),
            formSendet = document.querySelector('.form__sendet')
    
    
        $('.submit', form).val('Отправка...');
        $('input, textarea', form).attr('disabled','');
    
        data.append( 'name', 		$('[name="name"]', form).val() );
        data.append( 'phone', 		$('[name="phone"]', form).val() );
    
        function remoeveVisibleClass() {
            formSendet.classList.remove('visible');
        }
    
        files.each(function (key, file) {
            let cont = file.files;
            if ( cont ) {
                $.each( cont, function( key, value ) {
                    data.append( key, value );
                });
            }
        });
        
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            xhr: function() {
                let myXhr = $.ajaxSettings.xhr();
    
                if ( myXhr.upload ) {
                    myXhr.upload.addEventListener( 'progress', function(e) {
                        if ( e.lengthComputable ) {
                            let percentage = ( e.loaded / e.total ) * 100;
                                percentage = percentage.toFixed(0);
                            $('.submit', form)
                                .html( percentage + '%' );
                        }
                    }, false );
                }
    
                return myXhr;
            },
            error: function( jqXHR, textStatus ) {
                // Тут выводим ошибку
            },
            complete: function() {
                formSendet.classList.add('visible');
                // console.log('Complete')
                form.reset() 
                setTimeout(remoeveVisibleClass, 2000)
            }
        });
    
        return false;
    });
}
function sendForTelegramForm2(item) {
    $(item).on('submit', function (event) {

        event.stopPropagation();
        event.preventDefault();
    
        let form = this,
            submit = $('.submit', form),
            data = new FormData(),
            files = $('input[type=file]'),
            formSendet = document.querySelector('.form__sendet')
    
    
        $('.submit', form).val('Отправка...');
        $('input, textarea', form).attr('disabled','');
    
        data.append( 'name', 		$('[name="name"]', form).val() );
        data.append( 'phone', 		$('[name="phone"]', form).val() );
        data.append( 'message', 		$('[name="message"]', form).val() );
    
        function remoeveVisibleClass() {
            formSendet.classList.remove('visible');
        }
    
        files.each(function (key, file) {
            let cont = file.files;
            if ( cont ) {
                $.each( cont, function( key, value ) {
                    data.append( key, value );
                });
            }
        });
        
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            xhr: function() {
                let myXhr = $.ajaxSettings.xhr();
    
                if ( myXhr.upload ) {
                    myXhr.upload.addEventListener( 'progress', function(e) {
                        if ( e.lengthComputable ) {
                            let percentage = ( e.loaded / e.total ) * 100;
                                percentage = percentage.toFixed(0);
                            $('.submit', form)
                                .html( percentage + '%' );
                        }
                    }, false );
                }
    
                return myXhr;
            },
            error: function( jqXHR, textStatus ) {
                // Тут выводим ошибку
            },
            complete: function() {
                formSendet.classList.add('visible');
                console.log('Complete')
                form.reset() 
                setTimeout(remoeveVisibleClass, 2000)
            }
        });
    
        return false;
    });
}

sendForTelegramForm1(form1);
sendForTelegramForm2(form2);