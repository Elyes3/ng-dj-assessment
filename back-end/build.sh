set -o errexit
python -m pip install --upgrade pip
pip install -r requirements.txt
pip install gunicorn
python manage.py migrate