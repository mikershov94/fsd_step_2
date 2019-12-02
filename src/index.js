import './main.sass';
import 'jquery-mask-plugin';

$(() => {
    $(".text-field_masked input").mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ"});
})