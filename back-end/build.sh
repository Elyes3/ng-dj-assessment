set -o errexit
python -m pip install --upgrade pip
python manage.py collectstatic --no-input
python manage.py migrate