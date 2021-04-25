from app import app
import os


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.current_app.run(debug=True,host='0.0.0.0', port=port, use_reloader=False, threaded=True)
