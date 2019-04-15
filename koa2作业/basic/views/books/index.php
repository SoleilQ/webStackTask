<?php
use yii\bootstrap\Html;
?>

<h1>yii图书管理系统</h1>
<p>
    <?= Html::a('添加图书', ['add'], ['class' => 'btn btn-success']) ?>
</p>
<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <td>ID</td>
            <td>名字</td>
            <td>类别</td>
            <td>操作</td>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($bookList as $book) : ?>
        <tr>
            <td>
                <?= Html::encode("{$book->id}") ?>
            </td>
            <td>
                <?= Html::encode("{$book->name}") ?>
            </td>
            <td>
                <?= Html::encode("{$book->category}") ?>
            </td>
            <td>
                <?= Html::a('编辑', ['update', 'id' => $book->id], ['class' => 'btn btn-primary',]) ?>
                <?= Html::a('删除', ['delete', 'id' => $book->id], [
                    'class' => 'btn btn-danger',
                    'data' => [
                        'confirm' => '确定要删除吗?',
                        'method' => 'post',
                    ],
                    'style' => 'margin-left:20px'
                ]) ?>
            </td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table> 