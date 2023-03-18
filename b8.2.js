$(document).ready(function () {
    var image_list = [
        {
            ID: '1',
            Name:'Tên Sản Phẩm 1',
            price: '5000',
            Info: 'thong tin sản phẩm 1',
            Star: 'Số Lượng',
            manufaturor: 'cong ty 1',
            Edit: 'Edit',
            Delete: 'Delete'
        },
        {
            ID: '2',
            Name:'Tên Sản Phẩm 2',
            price: '5000',
            Info: 'thong tin sản phẩm 2',
            Star: 'Số Lượng',
            manufaturor: 'cong ty 1',
            Edit: 'Edit',
            Delete: 'Delete'
        },        
        {
            ID: '3',
            Name:'Tên Sản Phẩm 3',
            price: '5000',
            Info: 'thong tin sản phẩm 3',
            Star: 'Số Lượng',
            manufaturor: 'cong ty 1',
            Edit: 'Edit',
            Delete: 'Delete'
        },        
        {
            ID: '4',
            Name:'Tên Sản Phẩm 4',
            price: '5000',
            Info: 'thong tin sản phẩm 4',
            Star: 'Số Lượng',
            manufaturor: 'cong ty 1',
            Edit: 'Edit',
            Delete: 'Delete'
        },
    
    ]

    for (i = 0; i < image_list.length; i++) {
            var item = image_list[i];
            $("table").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Name}</td>
                <td>${item.price}</td>
                <td>${item.Info}</td>
                <td>${item.Star}</td>
                <td>${item.manufaturor}</td>
                <td><button class="button1">${item.Edit}</button></td>
                <td><button class="button1">${item.Delete}</button></td>
            </tr>`);
    }
})           


    // for (i = 0; i < image_list.length; i++) {
    //     var item = image_list[i];
    //     $("table").append("<tr><td>" + item.ID + "></td><td>" + item.Name + "</td><td>" + item.price +"</td><td>" + item.Info + " </td><td>" + item.Star + "</td><td>" + item.manufaturor + "</td></tr>");
    // };

