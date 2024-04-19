class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        my.sprite.rightarm = this.add.sprite(this.bodyX + 100, this.bodyY, "monsterParts", "arm_blueD.png");
        my.sprite.leftarm = this.add.sprite(this.bodyX - 100, this.bodyY, "monsterParts", "arm_blueD.png");
        my.sprite.leftarm.flipX = true;
        my.sprite.rightarm.angle = -30;
        my.sprite.leftarm.angle = 30;

        my.sprite.rightleg1 = this.add.sprite(this.bodyX + 50, this.bodyY + 150, "monsterParts", "leg_blueC.png");
        my.sprite.rightleg2 = this.add.sprite(this.bodyX + 85, this.bodyY + 110, "monsterParts", "leg_blueC.png");
        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.rightleg1.angle = -15;
        my.sprite.rightleg2.angle = -35;


        my.sprite.leftleg1 = this.add.sprite(this.bodyX - 50, this.bodyY + 150, "monsterParts", "leg_blueC.png");
        my.sprite.leftleg2 = this.add.sprite(this.bodyX - 85, this.bodyY + 110, "monsterParts", "leg_blueC.png");
        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.leftleg1.flipX = true;
        my.sprite.leftleg2.flipX = true;
        
        my.sprite.leftleg1.angle = 15;
        my.sprite.leftleg2.angle = 35;
        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueF.png");

        my.sprite.eye1 = this.add.sprite(this.bodyX - 30, this.bodyY - 50, "monsterParts", "eye_angry_green.png");
        my.sprite.eye2 = this.add.sprite(this.bodyX + 30, this.bodyY - 50, "monsterParts", "eye_angry_green.png");

        my.sprite.eye2.flipX = true;

        my.sprite.eye1.angle = 15;
        my.sprite.eye2.angle = -15;

        my.sprite.mouth1 = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "mouthC.png");
        my.sprite.mouth2 = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "mouthF.png");

        my.sprite.horn1 = this.add.sprite(this.bodyX + 40, this.bodyY - 90, "monsterParts", "detail_green_horn_small.png");
        my.sprite.horn2 = this.add.sprite(this.bodyX - 40, this.bodyY - 90, "monsterParts", "detail_green_horn_small.png");

        my.sprite.horn2.flipX = true;

        my.sprite.horn1.angle = -10;
        my.sprite.horn2.angle = 10;


        my.SKey = this.input.keyboard.addKey("S");
        my.FKey = this.input.keyboard.addKey("F");
        my.AKey = this.input.keyboard.addKey("A");
        my.DKey = this.input.keyboard.addKey("D");

        my.sprite.mouth1.visible = true;
        my.sprite.mouth2.visible = false;
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(my.SKey.isDown){
            my.sprite.mouth1.visible = true;
            my.sprite.mouth2.visible = false;
        }
        if(my.FKey.isDown){
            my.sprite.mouth2.visible = true;
            my.sprite.mouth1.visible = false;
        }

        if(my.AKey.isDown){
            this.bodyX -= 2;
        }
        if(my.DKey.isDown){
            this.bodyX += 2;
        }

        my.sprite.body.setPosition(this.bodyX, this.bodyY);

        my.sprite.rightarm.setPosition(this.bodyX + 100, this.bodyY);
        my.sprite.leftarm.setPosition(this.bodyX - 100, this.bodyY);

        my.sprite.rightleg1.setPosition(this.bodyX + 50, this.bodyY + 150);
        my.sprite.rightleg2.setPosition(this.bodyX + 85, this.bodyY + 110);

        my.sprite.leftleg1.setPosition(this.bodyX - 50, this.bodyY + 150);
        my.sprite.leftleg2.setPosition(this.bodyX - 85, this.bodyY + 110);


        my.sprite.eye1.setPosition(this.bodyX - 30, this.bodyY - 50);
        my.sprite.eye2.setPosition(this.bodyX + 30, this.bodyY - 50);

        my.sprite.mouth1.setPosition(this.bodyX, this.bodyY);
        my.sprite.mouth2.setPosition(this.bodyX, this.bodyY);

        my.sprite.horn1.setPosition(this.bodyX + 40, this.bodyY - 90,);
        my.sprite.horn2.setPosition(this.bodyX - 40, this.bodyY - 90,);
        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        //my.sprite.rightarm.angle =-20;
    }

}