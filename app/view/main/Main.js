/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Testing.view.main.Main', {
    extend: 'Ext.panel.Panel',
    initComponent () {
        let me=this;
        Ext.apply(this, {
            layout: 'vbox',
            items: [
                this.createList(),
                this.createGrid(),
                {
                    xtype:'toolbar',
                    width:'100%',
                    items:[
                        '->',
                        {
                            xtype:'button',
                            text:'Cancel',
                            padding:8,
                            width:150,
                            style:{
                                'background-image':'none',
                                'background-color':'#FFFFFF',
                                'border':'none',
                            },
                        },
                        {
                            xtype:'button',
                            text:'Save as Draft',
                            padding:8,
                            width:150,
                            style:{
                                'background-image':'none',
                                'background-color':'#FFFFFF',
                            },
                        },
                        {
                            xtype:'button',
                            text:`<span style="color:#FFFFFF">Submit<span>`,
                            padding:8,
                            width:150,
                            style:{
                                'background-image':'none',
                                'background-color':'#04BFAD',
                            },
                        }
                    ]
                }
            ],
            bbar:[
                '->',
            
            
            ]
           
        })

        this.callParent(arguments);
    },
    createList(){
        let me=this
        let storeCombobox= Ext.create('Ext.data.Store', {
            fields:['id','name'],
            data : [
                {id: '1',    name: 'Tracking Instruction'},
                {id: '2',    name: 'Logistic Instruction'},

            ]
        });
        let panel=Ext.create('Ext.panel.Panel',{
            title:`<b style="color:#545454">3rd Party Instruction</b>`,
            width: '100%',
            layout:{
                type:'hbox'
            },
            cls:'headerPanel',
            items:[
                // {
                //     xtype:'panel',
                //     layout:{
                //         type:'vbox'
                //     },
                //     items:[
                //         {

                //         }
                //     ]
                // },
                {
                    xtype:'combobox',
                    store:storeCombobox,
                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                    cls:'comboArrow',
                    margin:8,
                    width:'10%',
                    padding:8,
                    value:'2',
                    displayField:'name',
                    valueField:'id',
                //     tpl: Ext.create('Ext.XTemplate',
                //     '<tpl for=".">',
                //         '<div class="x-boundlist-item" style="border-bottom:1px solid #f0f0f0;">',
                //         '<div><img src="icon/cargo-truck.png" width=14 height=14 style="margin-right:4px;"/>{name}</div>',
                //     '</div>',
                // '</tpl>'
                // ),
                //     tpl: '<tpl for=".">' +
                //     '<div class="x-boundlist-item"><img src="{[this.getIcon(values)]}" class="icon"/> {name}</div>' +
                //  '</tpl>',
                    getIcon: function(values) {
                        // return the URL of the icon based on the value of the combobox
                        return 'icon/plus.png';
                    }
                    
                },
                me.createForm()
            ]
        })
        return panel
    },
    createForm(){
        let me=this;
        let storeCombobox= Ext.create('Ext.data.Store', {
            fields:['id','name'],
            data : [
                {id: '1',    name: 'Tracking Instruction'},
                {id: '2',    name: 'Logistic Instruction'},

            ]
        });
        let form=Ext.create('Ext.form.Panel',{
            title:`<div style="color:#545454;width:160px; background-color:#E5E5E5;text-align:center; font-weight:bold;border-radius:10px;padding:4px;">Draft</div>`,
            width:'90%',
            layout:{
                type:'form'
            },
            items:[
                {
                    xtype:'panel',
                    layout:{
                        type:'hbox',
                    },
                    items:[
                        {
                            xtype:'panel',
                            width:'80%',
                            style:{
                                'border-right':'1px dotted',
                            },  
                            layout:{
                                type:'hbox'
                            },
                            items:[
                                {
                                    xtype:'combobox',
                                    store:storeCombobox,
                                    labelAlign:'top',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    cls:'comboArrow',
                                    width:'25%',
                                    fieldLabel:'Assigned Vendor',
                                    margin:8,
                                    padding:8,
                                    value:'2',
                                    displayField:'name',
                                    valueField:'id'
                                    
                                },
                                {
                                    xtype:'textfield',
                                    labelAlign:'top',
                                    fieldLabel:'Attention Of',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    width:'25%',
                                    margin:8,
                                    padding:8,
                                    value:'John Smith ',
                                    
                                },
                                {
                                    xtype:'textfield',
                                    labelAlign:'top',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    width:'25%',
                                    fieldLabel:'Quotation No',
                                    margin:8,
                                    padding:8,
                                    value:'ABC-CDE 21',
                                    
                                },
                                {
                                    xtype:'combobox',
                                    store:storeCombobox,
                                    labelAlign:'top',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    cls:'comboArrow',
                                    fieldLabel:'Invoice To',
                                    width:'25%',
                                    margin:8,
                                    padding:8,
                                    value:'2',
                                    displayField:'name',
                                    valueField:'id'
                                    
                                },
                            ]
                        },
                        {
                            xtype:'panel',
                            width:'20%',
                            layout:{
                                type:'hbox'
                            },
                            items:[
                                {
                                    xtype:'combobox',
                                    store:storeCombobox,
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    cls:'comboArrow',
                                    labelAlign:'top',
                                    width:'100%',
                                    fieldLabel:'Customer Contract',
                                    margin:8,
                                    padding:8,
                                    value:'2',
                                    displayField:'name',
                                    valueField:'id'
                                    
                                },
                            ]
                        }
                    ]
                },
                {
                    xtype:'panel',
                    layout:{
                        type:'hbox'
                    },
                    items:[
                        {
                            xtype:'panel',
                            width:'80%',
                            style:{
                                'border-right':'1px dotted',
                            },  
                            layout:{
                                type:'hbox'
                            },
                            items:[
                                
                                {
                                    xtype:'textfield',
                                    labelAlign:'top',
                                    fieldLabel:'Vendor Address',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    width:'100%',
                                    margin:8,
                                    padding:8,
                                    value:'ABC-CDE 21',
                                    
                                },
                              
                            ]
                        },
                        {
                            xtype:'panel',
                            width:'20%',
                            layout:{
                                type:'hbox'
                            },
                            items:[
                                {
                                    xtype:'combobox',
                                    store:storeCombobox,
                                    labelAlign:'top',
                                    width:'100%',
                                    fieldLabel:'Customer PO No.',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    cls:'comboArrow',
                                    margin:8,
                                    padding:8,
                                    value:'2',
                                    displayField:'name',
                                    valueField:'id'
                                    
                                },
                            ]
                        }
                    ]
                },
             
            ]
        })
        return form

    },
    createGrid(){
        let me=this;
        me.storeGrid= Ext.create('Ext.data.Store', {
            fields:['id_data','description','qty','uom','unit_pr','discount','VAT_1','currency','VAT_2','subtotal','total','chargeto'],
            data : [
                {id_data:'ext-232',description: '',    qty: '1',uom:'1',unit_pr:'10000', discount:0,VAT_1:0,currency:'1',VAT_2:0.00,subtotal:0.00,total:0.00,changeto:''},
                {id_data:'ext-212',description: '',    qty: '2',uom:'1',unit_pr:'10000',discount:0,VAT_1:0,currency:'1',VAT_2:0.00,subtotal:0.00,total:0.00,changeto:''},

            ]
        });
        let columns=[
            {
                text:'Description',
                align:'center',
                editor: me.createText(),              
                dataIndex:'description',
                width:'15%',
                renderer(value){
                    if(!value){
                        return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">Description</div>`
                    }
                    return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${value}</div>`
                }
            },
            {
                text:'Qty',
                dataIndex:'qty',
                align:'center',
                editor: {
                    xtype: 'numberfield',
                    emptyText:'Please fill',
                },
                width:'5%',
                renderer(value){
                    return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${value}</div>`
                }
            },
            {
                text:'UOM',
                align:'center',
                dataIndex:'uom',
                editor:me.createComboboxUOM(),
                width:'6%',
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    let headerCt = view.headerCt;
                    let nameColumn = headerCt.getHeaderAtIndex(colIndex);
                    let nameEditor = nameColumn.getEditor();
                    //return value
                    console.log(value)
                    var comboRecord = nameEditor.findRecordByValue(value);
                    if (comboRecord) {
                        return `
                        <div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px"> 
                        <div class="arrow" style="float:right;width: 14px; height: 14px;display: inline;margin-leftt:8px;">&nbsp;</div>
                            ${comboRecord.get(nameEditor.displayField)}
                        </div>
                        `
                        return `
                        <div style="display:inline;color:#545454;background-color:#E5E5E5;text-align:center;border-radius:3px;padding:4px;">${comboRecord.get(nameEditor.displayField)}
                        <div class="arrow" style="float:left;width: 14px; height: 14px;display: inline;margin-right:4px;">&nbsp;</div>
                        </div>
                        `
                       // return '<span>testing</span>' + comboRecord.get(nameEditor.displayField);

                    }
                    me._uom.getRange().forEach((val,i)=>{
                        console.log(val)
                        if(val.data.abbr===value){
                            console.log(val.data.name)
                            return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${val.data.name}<div class="arrow"></div></div>`

                        }
                    })
                }
            },
            {
                text:'Unit Price',
                dataIndex:'unit_pr',
                editor: me.createText(),              
                width:'8%',
                renderer(value){
                    return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${value}</div>`
                }
            },
        
            {
                text:'Discount (%)',
                dataIndex:'discount',
                editor: me.createText(),              
                width:'7%',
                renderer(value){
                    return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${value}</div>`
                }
            },
            {
                text:'VAT (%)',
                dataIndex:'VAT_1',
                editor: me.createText(),              
                width:'5%',
                renderer(value){
                    return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${value}</div>`
                }
            },
            {
                text:'',
                width:'4%',
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    return `
                    <div class="arrow-right" style="float:right;width: 20px; height: 20px;display: inline;margin-leftt:8px;">&nbsp;</div>
                    `
                }
            },
            {
                text:'Currency',
                width:'7%',
                editor:me.createComboboxCurrency(),
                dataIndex:'currency',
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    let headerCt = view.headerCt;
                    let nameColumn = headerCt.getHeaderAtIndex(colIndex);
                    let nameEditor = nameColumn.getEditor();
                    //return value
                    console.log(value)
                    var comboRecord = nameEditor.findRecordByValue(value);
                    if (comboRecord) {
                        return `
                        <div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px"> 
                        <div class="arrow" style="float:right;width: 14px; height: 14px;display: inline;margin-leftt:8px;">&nbsp;</div>
                            ${comboRecord.get(nameEditor.displayField)}
                        </div>
                        `
                        return `
                        <div style="display:inline;color:#545454;background-color:#E5E5E5;text-align:center;border-radius:3px;padding:4px;">${comboRecord.get(nameEditor.displayField)}
                        <div class="arrow" style="float:left;width: 14px; height: 14px;display: inline;margin-right:4px;">&nbsp;</div>
                        </div>
                        `
                       // return '<span>testing</span>' + comboRecord.get(nameEditor.displayField);

                    }
                    me._currency.getRange().forEach((val,i)=>{
                        console.log(val)
                        if(val.data.abbr===value){
                            console.log(val.data.name)
                            return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${val.data.name}<div class="arrow"></div></div>`

                        }
                    })
                }
            },
            {
                text:'VAT Amount',
                dataIndex:'VAT_2',
                width:'6%',
                editor:me.createNumber(),
                renderer(value){
                    return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${value}</div>`
                }
            },
            {
                text:'Sub Total',
                dataIndex:'subtotal',
                width:'6%',
                editor:me.createNumber(),
                renderer(value){
                    return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${value}</div>`
                }
            },
            {
                text:'Total',
                width:'6%',
                dataIndex:'total',
                editor:me.createNumber(),
                renderer(value){
                    return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${value}</div>`
                }
            },
            {
                text:'Charge To',
                width:'20%',
                dataIndex:'charge',
                editor:me.createComboboxCharge(),
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    let headerCt = view.headerCt;
                    let nameColumn = headerCt.getHeaderAtIndex(colIndex);
                    let nameEditor = nameColumn.getEditor();
                    //return value
                    console.log(value)
                    var comboRecord = nameEditor.findRecordByValue(value);
                    if (comboRecord) {
                        return `
                        <div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px"> 
                        <div class="arrow" style="float:right;width: 14px; height: 14px;display: inline;margin-leftt:8px;">&nbsp;</div>
                            ${comboRecord.get(nameEditor.displayField)}
                        </div>
                        `
                        return `
                        <div style="display:inline;color:#545454;background-color:#E5E5E5;text-align:center;border-radius:3px;padding:4px;">${comboRecord.get(nameEditor.displayField)}
                        <div class="arrow" style="float:left;width: 14px; height: 14px;display: inline;margin-right:4px;">&nbsp;</div>
                        </div>
                        `
                       // return '<span>testing</span>' + comboRecord.get(nameEditor.displayField);

                    }
                    if(!value){
                        return `     
                         <div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px"> 
                        <div class="arrow" style="float:right;width: 14px; height: 14px;display: inline;margin-leftt:8px;">&nbsp;</div>
                            Select an Option
                        </div>`
                    }
                    me._charge.getRange().forEach((val,i)=>{
                        console.log(val)
                        if(val.data.abbr===value){
                            console.log(val.data.name)
                            return `<div style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">${val.data.name}<div class="arrow"></div></div>`

                        }
                    })
                }
            },
            {
                text:'',
                width:'5%',
                renderer: function(val,meta,rec) {
                    // generate unique id for an element
                    var id = Ext.id();
                    Ext.defer(function() {
                        Ext.widget('button', {
                            renderTo: Ext.query("#"+id)[0],
                            iconCls:'minus',
                            height:31,
                            width:31,
                            style:{
                                'background-color': '#E5E5E5',
                                'background-image': 'none',
                                'border-color':'#E5E5E5',
                            },
                            handler: function(button) {
                                let ticket=rec.data['id_data']
                                let storeSite=me.storeGrid
                               // console.log(store,me._grid)
                                // console.log(me.data_takeout,ticket)
                            
                                // let databaru=me.removeJSONobject(me.data_takeout,ticket)
                                // console.log(me.data_takeout,databaru)
                                storeSite.removeAt(storeSite.find('id_data', ticket))
                                // store.each(function(record, index) {
                                //     console.log(index)
                                //     record.set(me._grid.columns[0].dataIndex, index + 1);
                                // });
                                // storeSite.getRange().forEach((val,index)=>{
                                //     if(val.data.site_group_id===rec.data.site_group_id){
                                //         val.data.asset_list=[]
                                //         store.getRange().forEach((v,i)=>{
                                //             val.data.asset_list.push(v.data)
                                //         })
                                //     }
                                // })
    
                             },
                             listeners:{
                                afterrender(obj){
                                   // console.log(obj.up('grid'))
                                }
                             }
                        });
                    }, 50);
                    return Ext.String.format('<div id="{0}"></div>', id);
                }
            },

        ]
        let grid=Ext.create('Ext.grid.Panel',{
            width:'100%',
            cls:'gridColumn',
            columns:columns,
            store:me.storeGrid,
            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1,
              
            },
            tbar:[
                {
                    xtype:'label',
                    width:150,
                    html:`
                    <div style="color:#37DEDC;background-color:#FFFFFF;font-weight:bold;text-align:center;border-radius:3px;margin-left:8px;padding:8px"> 
                    <div class="arrow-down-green" style="float:right;width: 14px; height: 14px;display: inline;margin-left:0px;">&nbsp;</div>
                        Cost Detail
                    </div>
                    `
                    

                }
            ],
            bbar:[
                {
                    xtype:'label',
                    html:`Exchange Rate 1 USD = <span style="color:#545454;background-color:#F1F1F1;text-align:center;border-radius:3px;padding:8px;">3.6725</span>&nbsp AED`,

                },
                '->',
                {
                    xtype:'button',
                    width:31,
                    height:31,
                    margin:'0 40 0 0',
                    style:{
                        'background-image':'none',
                        'background-color':'#04BFAD',
                    },
                    iconCls:'plus-white',
                }
            ]
            
        })
        return grid
    },
    createText(){
        let textfield=Ext.create('Ext.form.field.Text',{
            fieldStyle: 'background-color: #F1F1F1;margin:0px;',
            emptyText:'Description',
        })
        return textfield
    },
    createNumber(){
        let textfield=Ext.create('Ext.form.field.Number',{
            fieldStyle: 'background-color: #F1F1F1;margin:0px;',
            emptyText:'Please Fill',
        })
        return textfield
    },
    createComboboxUOM(){
        let me=this
        // The data store containing the list of states
        me._uom = Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data : [
                {"abbr":"1", "name":"SHP"},
                {"abbr":"2", "name":"PHS"},
                {"abbr":"3", "name":"LIK"}
            ]
        });

        // Create the combo box, attached to the states data store
        let combobox=Ext.create('Ext.form.ComboBox', {
            store: me._uom,
            editable:false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'abbr',
        });    
        return combobox
    },
    createComboboxCurrency(){
        let me=this
        // The data store containing the list of states
        me._currency = Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data : [
                {"abbr":"1", "name":"USD"},
                {"abbr":"2", "name":"AED"},
                {"abbr":"3", "name":"RPH"}
                //...
            ]
        });

        // Create the combo box, attached to the states data store
        let combobox=Ext.create('Ext.form.ComboBox', {
            store: me._currency,
            editable:false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'abbr',
        });    
        return combobox
    },
    createComboboxCharge(){
        let me=this
        // The data store containing the list of states
        me._charge = Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data : [
                {"abbr":"1", "name":"Logistic"},
                {"abbr":"2", "name":"Donation"},
                //...
            ]
        });

        // Create the combo box, attached to the states data store
        let combobox=Ext.create('Ext.form.ComboBox', {
            store: me._charge,
            editable:false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'abbr',
        });    
        return combobox
    }          
});
