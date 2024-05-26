from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import User
def index(request):
    return render(request, 'chatbot/index.html')


def register(request):
    if request.method == 'POST':
        username = request.POST['username'].lower()
        password = request.POST['password']
        user_type = request.POST['user_type']
        User.objects.create(username=username, password=password, user_type=user_type)
        return JsonResponse({'message': 'Registration successful!'})

def login(request):
    if request.method == 'POST':
        username = request.POST['username'].lower()
        password = request.POST['password']
        try:
            user = User.objects.get(username=username, password=password)
            return JsonResponse({'message': 'Login successful!'})
        except User.DoesNotExist:
            return JsonResponse({'message': 'Invalid username or password'}, status=400)

def generate_questions(request):
    if request.method == 'POST':
        resume = request.FILES['resume']
        job_description = request.POST['job_description']
        questions = generate_interview_questions(resume, job_description)
        return JsonResponse({'questions': questions})

def chatbot_response(request):
    if request.method == 'POST':
        user_input = request.POST['input']
        response = get_chatbot_response(user_input)
        return JsonResponse({'response': response})

def generate_interview_questions(resume, job_description):
    questions = [
        {'question': 'Tell me about yourself.', 'answer': 'I am a dedicated professional with experience in...'},
        {'question': 'What are your strengths and weaknesses?', 'answer': 'My strengths include...'},
        {'question': 'How do your skills align with the requirements in the job description?', 'answer': 'My skills align with the job requirements because...'},
        {'question': 'Can you describe a project where you applied relevant skills?', 'answer': 'In one of my projects, I used my skills to...'},
        {'question': 'Why are you interested in this role based on your resume?', 'answer': 'I am interested in this role because...'},
        {'question': 'Why should we hire you?', 'answer': 'You should hire me because...'},
        {'question': 'Where do you see yourself in the next 5 years?', 'answer': 'In the next 5 years, I see myself...'}
    ]
    return questions

def get_chatbot_response(user_input):
    lower_input = user_input.lower()
    if 'hello' in lower_input:
        return 'Hello! How can I assist you today?'
    elif 'resume' in lower_input:
        return 'You can upload your resume in PDF, DOCX, or TXT format.'
    elif 'job description' in lower_input:
        return 'Please provide the job description to generate relevant interview questions.'
    elif 'help' in lower_input:
        return 'I am here to help! You can ask me about registration, login, or how to use this site.'
    else:
        return 'I\'m not sure about that. Can you please rephrase your question?'

