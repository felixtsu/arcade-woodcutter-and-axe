namespace SpriteKind {
    export const tree = SpriteKind.create()
    export const water = SpriteKind.create()
    export const god = SpriteKind.create()
    export const Fairy = SpriteKind.create()
    export const FallenTree = SpriteKind.create()
    export const SpecialTree = SpriteKind.create()
    export const GoldenAxe = SpriteKind.create()
    export const BronzeAxe = SpriteKind.create()
    export const SilverAxe = SpriteKind.create()
    export const Home = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tree, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        heroSprite.x += -10
        if (Math.percentChance(50)) {
            sprite.sayText("砍倒啦", 1000, false)
            otherSprite.setImage(img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                .......ee.......
                ......eeee......
                .....eeeeee.....
                .......ee.......
                `)
            otherSprite.setKind(SpriteKind.FallenTree)
            info.changeScoreBy(1)
        } else {
            sprite.sayText("这棵树好大", 1000, false)
        }
    }
})
sprites.onDestroyed(SpriteKind.GoldenAxe, function (sprite) {
    pause(2000)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SpecialTree, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        otherSprite.setFlag(SpriteFlag.Ghost, true)
        game.splash("手一滑,斧头飞了")
        heroSprite.setImage(img`
            ........................
            ........................
            .......ff...............
            .....ff22ff.............
            ...fff2222fff...........
            ..fff222222fff..........
            ..fff222222fff..........
            .ffeeeeeeeeeeff.........
            .ffe22222222eff.........
            .fffffeeeefffff.........
            .ffefbf44fbfeff.........
            ..fe41fddf14ef..........
            ..efeddddddefe..........
            ...ef122221fe...........
            ...4f145541f4...........
            ....ffffffff............
            .....ffffff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
        heroSprite.sayText("呜呜呜呜", 1000, false)
        pause(2000)
        game.splash("泉水里面出现了仙子")
        fairySprite = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Fairy)
        tiles.placeOnRandomTile(fairySprite, assets.tile`myTile3`)
        fairySprite.sayText("樵夫，你丢失的是这把金灿灿的斧头吗？", 2000, false)
        goldenAxeSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . 1 . . e e . . . . . . . 
            . . . 1 5 1 e e e . . . . . . . 
            . . . 1 5 5 e 1 1 1 1 1 1 1 . . 
            . . . 1 5 e 5 5 5 5 5 5 5 1 . . 
            . . . 1 e 5 5 5 5 5 5 5 5 1 . . 
            . . . . e 5 5 5 5 5 5 5 5 1 . . 
            . . . . e 5 5 5 5 5 5 5 5 1 . . 
            . . . e e 1 5 5 5 5 5 5 5 1 . . 
            . . . e . . 5 5 5 5 5 5 1 . . . 
            . e e e . . . 1 1 5 5 1 . . . . 
            e e e . . . . . . 1 1 . . . . . 
            e e . . . . . . . . . . . . . . 
            e e . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.GoldenAxe)
        tiles.placeOnTile(goldenAxeSprite, tiles.getTileLocation(7, 4))
        scene.cameraFollowSprite(fairySprite)
        pause(2000)
        if (game.ask("是吗？")) {
            heroSprite.sayText("是我的！", 2000, false)
            pause(2000)
            goldenAxeSprite.sayText("你不是我的主人")
            goldenAxeSprite.startEffect(effects.spray, 2000)
            pause(2000)
            game.over(false)
        } else {
            heroSprite.sayText("不是这么好的斧头", 2000, false)
            pause(2000)
            fairySprite.sayText("是这把银闪闪的斧头吗？", 2000, false)
            silverAxeSprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . e . . . . . . . 
                . . . . b . . e e . . . . . . . 
                . . . b 1 b e e e . . . . . . . 
                . . . b 1 1 e b b b b b b b . . 
                . . . b 1 e 1 1 1 1 1 1 1 b . . 
                . . . b e 1 1 1 1 1 1 1 1 b . . 
                . . . . e 1 1 1 1 1 1 1 1 b . . 
                . . . . e 1 1 1 1 1 1 1 1 b . . 
                . . . e e b 1 1 1 1 1 1 1 b . . 
                . . . e . . b 1 1 1 1 1 b . . . 
                . e e e . . . b b 1 1 b . . . . 
                e e e . . . . . . b b . . . . . 
                e e . . . . . . . . . . . . . . 
                e e . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.SilverAxe)
            tiles.placeOnTile(silverAxeSprite, tiles.getTileLocation(9, 4))
            scene.cameraFollowSprite(fairySprite)
            pause(2000)
            if (game.ask("是吗？")) {
                heroSprite.sayText("是我的！", 2000, false)
                pause(2000)
                silverAxeSprite.sayText("你不是我的主人")
                silverAxeSprite.startEffect(effects.spray, 2000)
                pause(2000)
                game.over(false)
            } else {
                heroSprite.sayText("不是这么好的斧头", 2000, false)
                pause(2000)
                fairySprite.sayText("樵夫，你丢失的是这把生锈的斧头吗？", 2000, false)
                brozenAxeSprite = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . e . . . . . . . 
                    . . . . b . . e e . . . . . . . 
                    . . . b f b e e e . . . . . . . 
                    . . . b f f e b b b b b b b . . 
                    . . . b f e f f f f f f f b . . 
                    . . . b e f f f f f f f f b . . 
                    . . . . e f f f f f f f f b . . 
                    . . . . e f f f f f f f f b . . 
                    . . . e e b f f f f f f f b . . 
                    . . . e . . b f f f f f b . . . 
                    . e e e . . . b b f f b . . . . 
                    e e e . . . . . . b b . . . . . 
                    e e . . . . . . . . . . . . . . 
                    e e . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.BronzeAxe)
                tiles.placeOnTile(brozenAxeSprite, tiles.getTileLocation(8, 4))
                scene.cameraFollowSprite(fairySprite)
                pause(2000)
                if (game.ask("是吗？")) {
                    heroSprite.sayText("嗯，这是我的斧头", 2000, false)
                    pause(2000)
                    fairySprite.sayText("诚实的樵夫，这三把斧头都是你的", 2000, false)
                    goldenAxeSprite.follow(heroSprite)
                    silverAxeSprite.follow(heroSprite)
                    brozenAxeSprite.follow(heroSprite)
                    pause(3000)
                    game.over(true)
                } else {
                    fairySprite.sayText("我这里没有别的斧头了")
                    brozenAxeSprite.destroy(effects.confetti, 2000)
                    pause(2000)
                    game.over(false)
                }
            }
        }
    }
})
sprites.onDestroyed(SpriteKind.SilverAxe, function (sprite) {
    pause(2000)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    homeSprite = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.Home)
    tiles.placeOnTile(homeSprite, tiles.getTileLocation(1, 1))
    heroSprite.destroy()
    tiles.setTilemap(tilemap`level1`)
    heroSprite = sprites.create(img`
        ....................................
        .......fff..........................
        ....fffff2f.........................
        ..ffeeeee22ff........e..............
        .ffeeeeee222ff...b..ee..............
        .feeeefffeeeef..bfbeee..............
        .fffffeee2222ef.bffebbbbb...........
        fffe222fffffe2f.bfeffffffb..........
        fffffffffeeefff.befffffffb..........
        fefe44ebbf44eef..fbffffffb..........
        .fee4d4bbfddef...e.bffffb...........
        ..feee4dddddfee.fe..bbfb............
        ...f2222222eeddef.....b.............
        ...f444445e44ddef...................
        ...ffffffffeeeee....................
        ...fff...ff.........................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        `, SpriteKind.Player)
    tiles.placeOnTile(heroSprite, tiles.getTileLocation(2, 4))
    scene.cameraFollowSprite(heroSprite)
    controller.moveSprite(heroSprite)
    treeSprite = sprites.create(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `, SpriteKind.SpecialTree)
    tiles.placeOnTile(treeSprite, tiles.getTileLocation(8, 5))
    for (let 值 of tiles.getTilesByType(assets.tile`treeTile`)) {
        treeSprite = sprites.create(img`
            ......cc66......
            .....c6576c.....
            ....c677576c....
            ....cc677666....
            ...cc6c6667cc...
            ..6c666777cc6c..
            ..c76666766776..
            ..c6777777776c..
            ..cc67777776cc..
            .c67cc76676676c.
            .c777666667777c.
            .c6777777777766.
            .cc7767776776666
            c676cc6766666776
            c777766666677776
            cc7777777777776c
            .c676777677767c.
            ..cc667666766c..
            ...ccc6c66ccc...
            .....cccccc.....
            .......ee.......
            ......eeee......
            .....eeeeee.....
            .......ee.......
            `, SpriteKind.tree)
        tiles.placeOnTile(treeSprite, 值)
    }
})
let treeSprite: Sprite = null
let homeSprite: Sprite = null
let brozenAxeSprite: Sprite = null
let silverAxeSprite: Sprite = null
let goldenAxeSprite: Sprite = null
let fairySprite: Sprite = null
let heroSprite: Sprite = null
game.splash("山里有个砍树人")
tiles.setTilemap(tilemap`级别1`)
heroSprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
heroSprite.sayText("睡好饱，要去砍柴啦", 2000, true)
tiles.placeOnTile(heroSprite, tiles.getTileLocation(3, 3))
controller.moveSprite(heroSprite)
