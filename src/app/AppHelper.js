import React, { Component } from 'react';
import { format } from "date-fns";


function roundBalance(number) {
    try {
        return number.toFixed(2);
    } catch (error) {
    }
    return "";
}

function formatDate(date) {
    try {
        return format(date, "dd.MM.yyyy HH:mm");
    } catch (error) {
    }
    return "";
};

const typeTranslation = {
    topup: "Цільові надходження",
    payments: "Платежі",
    mobile: "Поповнення мобільного",
    charity: "Благодійність",
    shopping: "Покупки",
    transfer_to: "Перекази",
    transfer_from: "Поповнення",
    other: "Інше"
};

function getOperationTypeTranslation(type) {

    if (type in typeTranslation) {
        return typeTranslation[type];
    }

    return typeTranslation["other"];
};

const typeIcons = {
    topup: "task_alt",
    payments: "wallet",
    mobile: "phone_iphone",
    charity: "volunteer_activism",
    shopping: "shopping_cart",
    transfer_to: "keyboard_double_arrow_right",
    transfer_from: "keyboard_double_arrow_left",
    other: "dynamic_feed"
};

function getOperationTypeIcon(type) {

    if (type in typeIcons) {
        return typeIcons[type];
    }

    return typeIcons["other"];
};

export { roundBalance, formatDate, getOperationTypeIcon as addIcon, getOperationTypeTranslation as addTypeTranslation };