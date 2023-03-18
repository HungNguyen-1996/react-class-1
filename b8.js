<script>
    <script language="javaScript">
  function submit() {
      $(document).ready(function () {
          var input1Value = $(".input-1").val();
          var input2Value = $("#input-2").val();
          $("#input-1-value").text(input1Value);
          $(".input-2-value").text(input2Value);
          console.log(input2Value);
      })
  }

  $(document).ready(function () {
      var image_list = [
          {
              url: 'link a',
              name: 'san pham 1',
              price: 10000,
              manufaturor: 'cong ty 1'
          },
          {
              url: 'link 2',
              name: 'san pham 2',
              price: 10000,
              manufaturor: 'cong ty 2'
          },
          {
              url: 'link 3',
              name: 'san pham 3',
              price: 10000,
              manufaturor: 'cong ty 3'
          },
          {
              url: 'link 4',
              name: 'san pham 4',
              price: 10000,
              manufaturor: 'cong ty 4'
          }
      ]
      for (i = 0; i < image_list.length; i++) {
          var item = image_list[i];
          $("#image-container").append("<div><img src={ + item.url} /><p>"
              + item.name + "</p><p>hang san xuat:"
              + item.manufaturor +
              "</p><p>gia: " + item.price + "Dong </p></div>");
          $("img").addClass("image-content");
      }
  })