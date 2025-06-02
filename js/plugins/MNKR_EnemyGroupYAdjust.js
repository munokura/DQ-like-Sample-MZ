/*:
 * @target MZ MV
 * @plugindesc 敵グループのY座標を指定できます。
 * @author munokura
 *
 * @help
 * 戦闘開始時に敵グループ全体のY座標を指定した値に変更します。
 * MNKR_BattleBackgroundMask と合わせて使う事を想定した試作プラグインです。
 * 全ての敵グループに適用されます。
 * 
 * 超絶試作のため、ライセンスを設定していません。
 * 利用者の皆さんの機能要望・意見をお待ちしています。
 * 
 * 例：
 * 1. 全部一括で良い。（現状）
 * 2. 敵キャラ毎にY座標を指定したい。
 * 敵キャラのメモタグかプラグインパラメーターで指定。
 * 3. 1.2.の摂政案：プラグインパラメーターでデフォルト値を採用。
 * 個別に指定したい敵キャラのメモタグかプラグインパラメーターで指定。
 * などなど
 * 
 * ムノクラはゲーム体験が少なく、
 * 創作者の皆さんがどんなものを望んでいるのか知りたいです。
 * 
 * https://x.com/munokura
 *
 *
 * @param targetY
 * @text 敵キャラY座標
 * @type number
 * @min 0
 * @desc 敵グループ全体のY座標
 * @default 352
 */

(() => {
    const pluginName = document.currentScript.src.split("/").pop().replace(/\.js$/, "");
    const parameters = PluginManager.parameters(pluginName);
    const param = {};
    param.targetY = Number(parameters['targetY'] || 388);

    const _Spriteset_Battle_createEnemies = Spriteset_Battle.prototype.createEnemies;
    Spriteset_Battle.prototype.createEnemies = function () {
        _Spriteset_Battle_createEnemies.call(this);
        this._enemySprites.forEach(function (sprite) {
            sprite._homeY = param.targetY;
        });
    };

})();