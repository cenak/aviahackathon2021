import telebot
from random import randint, choice
from facts import facts
from telebot import types
from bot_config import token
bot = telebot.TeleBot(token)


@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.from_user.id, '''Отлично. Вот, что я могу тебе предложить, быструю доставку гарантирую!''')
    keyboard = types.InlineKeyboardMarkup()
    key_aviation_ladders = types.InlineKeyboardButton(text='Авиационные стремянки', callback_data='Sherem')
    keyboard.add(key_aviation_ladders)
    key_aviation_pumps = types.InlineKeyboardButton(text='Насосы', callback_data='Sherem')
    keyboard.add(key_aviation_pumps)
    key_aviation_traps = types.InlineKeyboardButton(text='Трапы', callback_data='Sherem')
    keyboard.add(key_aviation_traps)
    key_aviation_buks = types.InlineKeyboardButton(text='Буксиры', callback_data='Sherem')
    keyboard.add(key_aviation_buks)
    key_aviation_servise = types.InlineKeyboardButton(text='Сервисное оборудование', callback_data='Sherem')
    keyboard.add(key_aviation_servise)
    key_aviation_transp = types.InlineKeyboardButton(text='Транспортеры', callback_data='Sherem')
    keyboard.add(key_aviation_transp)
    bot.send_message(message.from_user.id, text='Выбери, что хочешь заказать', reply_markup=keyboard)


@bot.message_handler(commands=['fact'])
def fact(message):
    bot.send_message(message.from_user.id, choice(facts) )

@bot.message_handler(content_types=['text'])
def get_text(message):
        bot.send_message(message.from_user.id, '''
Привет! Это я Шеремуша, твой помощник и друг из аэропорта Шереметьево. \n
Что-то нужно заказать? Напиши /start для заказа\n
Заскучал? Узнай интересный факт о аэропорте /fact ''')


@bot.callback_query_handler(func=lambda call: True) 
def callback_worker(call): 
    if call.data == "Sherem": 
       msg = 'Твой заказ прибудет через ' + str(randint(5, 20)) + ' минут. Пока ждешь, можешь почитать факты о нашем аэропорте)'
       bot.send_message(call.message.chat.id, msg)


bot.polling(none_stop=True, interval=0)
