# main/models.py

from django.db import models


class Doctor(models.Model):
    # Учурдагы талаалар
    name = models.CharField(max_length=200)
    specialty = models.CharField(max_length=300)
    image = models.ImageField(upload_to='doctors/')
    bio = models.JSONField(default=dict, blank=True, null=True) 

    # ===== ЖАҢЫ КОШУЛГАН ТАЛААЛАР =====
    
    # 1. Онлайн-консультациянын баасы
    online_consultation_price = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        default=0.00
    )

    # 2. "Жөн эле суроо" баасы
    ask_question_price = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        default=0.00
    )

    # 3. Дарыгердин жеке WhatsApp номери
    whatsapp_number = models.CharField(
        max_length=20, 
        blank=True,  # Бул талааны толтуруу милдеттүү эмес
        help_text="Эл аралык форматта, бирок '+' белгиси жок. Мисалы: 996555123456"
    )

    # 4. Дарыгердин активдүү/пассивдүү статусу (мисалы, башкы бетке чыгаруу үчүн)
    is_active = models.BooleanField(default=True)


    def __str__(self):
        return self.name

class Review(models.Model):
    doctor = models.ForeignKey(Doctor, related_name='reviews', on_delete=models.CASCADE)
    text = models.TextField()

    def __str__(self):
        return f"Review for {self.doctor.name}"