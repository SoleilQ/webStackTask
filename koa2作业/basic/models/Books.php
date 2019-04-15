<?php
namespace app\models;

use yii\db\ActiveRecord;

class Books extends ActiveRecord
{
  public static function tableName()
    {
        return 'books';
    }

  public function rules()
  {
        return [
            [['id', 'name'], 'required'],
            [['id'], 'integer'],
            [['name'], 'string', 'max' => 52],
            [['category'], 'string', 'max' => 52],
        ];
  }

  public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => '名字',
            'category' => '类别'
        ];
    }
}
 