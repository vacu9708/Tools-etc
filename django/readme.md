# Basic commands
- Creating a project: django-admin startproject [name]
- Starting the server: python manage.py runserver
- Creating and registering an app: 1. django-admin startapp [name] 2. Add '[name].apps.[Name]Config' in INSTALLED_APPS of settings.py
- Creating an admin account: python manage.py createsuperuser [name]
- Migrating model to database: python manage.py makemigration -> migrate

# Model
- null: the attribute can have a null value
- blank: django can take a blank value
- auto_now_add: generate a timestamp whenever the model instance is created
- ID attribute is incremented automatically but can be overriden with something else like UUID
