# Basic commands
- Creating a project: django-admin startproject [name]
- Starting the server: python manage.py runserver
- Creating and registering an app: 1. django-admin startapp [name] 2. Add '[name].apps.[Name]Config' in INSTALLED_APPS of settings.py
- Creating an admin account: python manage.py createsuperuser [name]
- Migrating model to database: python manage.py makemigrations -> migrate

# Model
- null: the attribute can have a null value
- blank: django can take a blank value
- auto_now_add: generate a timestamp whenever the model instance is created
- ID attribute is incremented automatically but can be overriden with something else like UUID

# Static files
- STATIC_ROOT<br>
>The path to the directory where collectstatic will collect static files (statics from INSTALLED_APPS) for deployment.<br>
>Statics from INSTALLED_APPS are only available on debug mode. (middleware **WhiteNoise** is required)
- STATIC_URL: URL on HTTP requests to use when referring to static files located in STATIC_ROOT.
- MEDIA_ROOT, MEDIA_URL: for user-uploaded files.

### Connecting STATIC_URL to STATIC_ROOT
~~~python
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
~~~
