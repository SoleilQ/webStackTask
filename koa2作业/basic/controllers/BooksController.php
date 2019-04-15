<?php
namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\data\Pagination;
use app\models\Books;

class BooksController extends Controller
{ 
  public function actionIndex()
  {
    $query = Books::find();
    $bookList = $query -> orderBy('id') -> all();
    return $this -> render('index',[
      'bookList' => $bookList,
    ]);
  }

  public function actionAdd()
  {
    $model = new Books();
    if ($model->load(Yii::$app->request->post()) && $model->save()) {
      return $this->redirect(['index', 'id' => $model->id]);
    }
    return $this->render('add', [
      'model' => $model,
    ]);
  }

  public function actionUpdate($id)
  {
    $model = Books::findOne($id);

    if ($model->load(Yii::$app->request->post()) && $model->save()) {
      return $this->redirect(['index', 'id' => $model->id]);
    }

    return $this->render('update', [
        'model' => $model,
    ]);
  }

  public function actionDelete($id) 
  {
    if (($model = Books::findOne($id)) !== null) {
      $model -> delete();
      return $this->redirect(['index']);
    }
  }
}
 