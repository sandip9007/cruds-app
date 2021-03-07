$('#update_user').on('submit', function(e){
    e.preventDefault()
    const serializedArray = $(this).serializeArray();
    let data = {}
    // console.log(data)
    $.map(serializedArray, function(n, i){
        data[n['name']] = n['value']
    })
    const request = {
        "url" : `http://localhost:3200/api/users/${data.id}`,
        "method" : 'PUT',
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert('Data updated sucessfully')
    })
    console.log(`http://localhost:3200/api/users/${data.id}`)
})