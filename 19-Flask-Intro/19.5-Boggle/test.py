from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle
import json



class FlaskTests(TestCase):

    # TODO -- write tests for every view function / feature!
    @classmethod
    def setUp(self):
        app.config['TESTING'] = True
        app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

    def test_root_route(self):
        '''Check session values, along with HTML'''
        with app.test_client() as client:
            res = client.get('/')
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code, 200)
            self.assertIn('board', session)
            self.assertIsNone(session.get('highscore'))
            self.assertIsNone(session.get('games-played'))
            self.assertIn('<p>High Score:', html)

    # def test_handle_guess(self):
    #     with app.test_client() as client:
    #         data = {'guess': 'cat'}
    #         res = client.post('/handle-guess', data=json.dumps(data), content_type='application/json')
    #         html = res.get_data(as_text=True)

    #         self.assertEqual(res.status_code, 200)