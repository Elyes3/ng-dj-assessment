set -o errexit
python -m pip install --upgrade pip
pip install -r requirements.txt
pip install gunicorn
pip install psycopg2
python manage.py migrate