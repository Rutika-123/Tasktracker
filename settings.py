DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'tasktracker_db',
        'CLIENT': {
            'host': 'mongodb://127.0.0.1:27017/',
        }
    }
}
