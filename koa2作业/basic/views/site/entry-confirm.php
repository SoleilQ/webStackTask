<?php
use yii\helpers\Html;
?>

<p>You Have entered the following information:</p>

<ul>
    <li>
        <lable>Name</lable>: <?= Html::encode($model->name) ?>
    </li>
    <li>
        <lable>Email</lable>: <?= Html::encode($model->email) ?>
    </li>
</ul> 