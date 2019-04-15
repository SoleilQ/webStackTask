<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
?>
<?php $form = ActiveForm::begin(); ?>
<?= $form->field($model, 'id') ?>
<?= $form->field($model, 'name') ?>
<?= $form->field($model, 'category') ?>
<div class="form-group">
    <?= Html::submitButton('保存', ['class' => 'btn btn-success']) ?>
</div>
<?php ActiveForm::end(); ?> 
