
num_dic={
    '۱':'1',
    '۲':'2',
    '۳':'3',
    '۴':'4',
    '۵':'5',
    '۶':'6',
    '۷':'7',
    '۸':'8',
    '۹':'9',
    '۰':'0'
}

month_dic = {
    "فروردین":"1",
    "اردیبهشت":"2",
    "خرداد":"3",
    "تیر":"4",
    "مرداد":"5",
    "شهریور":"6",
    "مهر":"7",
    "آبان":"8",
    "آذر":"9",
    "دی":"10",
    "بهمن":"11",
    "اسفند":"12"
}

def convert_persian_to_english_numbers(persian_num):
    eng_num = ''
    for char in persian_num:
        eng_num = eng_num + num_dic[char]
    return eng_num
