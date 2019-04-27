<?php
namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\data\Pagination;
use app\models\Books;
use yii\web\Response;

class BooksController extends Controller
{ 
  public function actionIndex()
  {
    $searchModel = new Books();
    $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
    Yii::$app->response->format = Response::FORMAT_JSON;
    return $dataProvider->getModels();
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
 