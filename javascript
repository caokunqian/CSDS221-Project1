$(document).ready(function() {
      // Calculate number of days and total cost on date changes
      $('#checkIn, #checkOut, #adults').on('change', function() {
        var checkIn = moment($('#checkIn').val());
        var checkOut = moment($('#checkOut').val());
        var adults = parseInt($('#adults').val());
        });

        // Reset form and display success toaster
        function resetForm() {
          $('input[type=text], input[type=date], input[type=email], textarea').val('');
          $('input[type=radio], input[type=checkbox]').prop('checked', false);
          $('select').prop('selectedIndex', 0);
          $('.has-error').removeClass('has-error');
          toastr.info('Form fields have been cleared.');
        }

        // Validate and submit form
        function submitForm() {
          var errors = [];

          // Check for empty fields
          $('input[type=text], input[type=date], input[type=email], textarea').each(function() {
            if ($(this).val() === '') {
              $(this).closest('.form-group').addClass('has-error');
              errors.push($(this).attr('name') + ' field is required.');
            }
            else {
              $(this).closest('.form-group').removeClass('has-error');
            }
          });

          // Check if cost is calculated
          if ($('#cost').val() === '') {
            errors.push('Total cost is not calculated.');
          }

          // Check if cost is positive
          if ($('#cost').val() < 0) {
            errors.push('Total cost cannot be negative.');
          }

          // Display error toaster or success toaster
          if (errors.length > 0) {
            toastr.error(errors.join('<br>'));
          }
          else {
            toastr.success('Form was successfully submitted.');
          }
        }

        // Reset form on reset button click
        $('#resetBtn').click(function() {
          resetForm();
        });

        // Submit form on submit button click
        $('#submitBtn').click(function() {
          submitForm();
        });
      })
