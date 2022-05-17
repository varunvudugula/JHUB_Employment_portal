import speech_recognition as sr
import pyttsx3
listener=sr.Recognizer()
engine=pyttsx3.init()
engine.say("hello varun")
engine.say("how can i help you")
engine.runAndWait()

with sr.Microphone() as source:
    print("listening...")
    voice=listener.listen(source)
    try:
        command=listener.recognize_google(voice,language='eng-in')
        print(command)
        
    except Exception as e:
        print("sorry could not recognise your voice:"+str(e))