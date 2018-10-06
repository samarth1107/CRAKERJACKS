import speech_recognition as sr


r = sr.Recognizer()

with sr.Microphone() as source:
	print("Speak Something:")
	r.adjust_for_ambient_noise(source, duration=2)

	audio = r.listen(source)

	try:
		file = open('text.txt','w+')
		text = r.recognize_google(audio)
		file.write(text)
		print('You said : {}'.format(text))

	except:
		print('Sorry voice not recognized')
