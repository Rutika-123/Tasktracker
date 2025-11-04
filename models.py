from djongo import models

class Task(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=50, default='General')
    priority = models.CharField(max_length=20, choices=[
        ('Low','Low'), ('Medium','Medium'), ('High','High')
    ], default='Medium')
    deadline = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=[
        ('Pending','Pending'), ('Completed','Completed')
    ], default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
