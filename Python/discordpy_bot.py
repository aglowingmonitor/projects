##Yet another bot for some game
##Created by aglowingmonitor

##Grabbing requisites
import os
import sys
import time
import asyncio
import requests
import json
from time import gmtime, strftime

import discord
from discord.ext import commands
import logging

##Sample POST
#api_url = ''
#sampledata = {'key': 'person123',
#              'credits': 234}
#data_json = json.dumps(sampledata)
#stuff = requests.post(api_url, data_json)
#response = stuff.text
#response2 = json.loads(response)
#print(str(response2['key']))

bot_token = ''
ownerID = ''
server_url = ''
testserver_url = 'google.com'

announcements_channel = ''

logger_a = logging.getLogger('discord')
logger_a.setLevel(logging.DEBUG)
handler_a = logging.FileHandler(filename='dependencies/bot_full.log', encoding='utf-8', mode='w')
handler_a.setFormatter(logging.Formatter('%(asctime)s:%(levelname)s:%(name)s:%(message)s'))
logger_a.addHandler(handler_a)

def is_it_owner():
    def pred(c):
        return c.message.author.id == ownerID
    return commands.check(pred)

def checkRole():
    def pred(c):
        if c.has_role('Game Moderator') or c.has_role('Game Admin') or c.has_role('Director'):
            return True
        else:
            return False

def getCreditsVal(full):
    datatoyeet = {'command': 'getcredits',
                  'key': full,
                  'extradata': 'none'
                  }
    data_json = json.dumps(datatoyeet)
    
    stuff = requests.post(server_url, data_json)
    data_json = json.dumps(datatoyeet)
    stuff = requests.post(server_url, data_json)
    response = stuff.text
    print(response)
    j = json.loads(response)
    try:
        if 'error' in j:
            a = str(j['error'])
            return False,a
        elif 'Credits' in j:
            a = str(j['Credits'])
            return True,a
        else:
            return False,'Dunno what to respond with lol'
    except: 
        print ("EXCEPTION: ", j)

c = commands.Bot(command_prefix = '.')

@c.command()
async def ping():
    pingtime = time.time()
    em = discord.Embed(title='Pinging server..', colour=0x42c5f4)
    m = await c.say(embed=em)
    ping = time.time() - pingtime
    com = "Pong! %.01f seconds"%ping
    em = discord.Embed(title=com, colour=0x42f456)
    await c.edit_message(m, embed=em)

###0x42c5f4

@c.command()
async def credits(*args):
    if checkRole:
        full = ''
        for word in args:
            full += word
            full += ' '
        em = discord.Embed(title='Finding data for user: '+full, colour=0x42c5f4)
        m = await c.say(embed=em)
        success, result = getCreditsVal(full)

        if not success:
            em = discord.Embed(title='Error: '+result, colour=0xc6251f)
            await c.edit_message(m, embed=em)
        else:
            em = discord.Embed(title='The credit balance for user: '+full+' is: '+result, colour=0x42f456)
            em.set_image(url='https://web.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&userid='+str(full))
            await c.edit_message(m, embed=em)
    
@c.command()
@is_it_owner()
async def announce(*args):
    if c.has_role('Verified'):
        await c.say('Command not sent in DMS')
    else:
        output = ''
        for word in args:
            output += word
            output += ' '
        await c.send_message(discord.Object(id=announcements_channel), '@everyone '+output)
    
    


async def throwException(e, message):
    em = discord.Embed(title='A severe error has occured', description=str(e), colour=0xc6251f)
    em.set_author(name='Game Name', icon_url=c.user.default_avatar_url)
    await c.say(embed=em)



@c.event
async def on_ready():
    print("---------------------------------")
    print("The Docklands -- Official Bot")
    print("Created by GraphicalIntensity")
    print("Hosted on Pixelite Servers")
    print("\n---------------------------------")
    print("\nBot State: Alpha\nBot Version: 0.10")
    print("\n---------------------------------")
    print("\nLogging into discord API...")
    print("Done! Bot name: "+c.user.name)
    print("Bot UserID: "+c.user.id)
    print("\n---------------------------------")
    print("\nBot login successful")
    print("\n---------------------------------")
    await c.change_presence(game=discord.Game(name='A Game'))

c.run(bot_token)
