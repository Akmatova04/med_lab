# main/views.py

from rest_framework import viewsets
from .models import Doctor
# ===== DoctorSerializer'дин ордуна жаңы экөөнү импорт кылабыз =====
from .serializers import DoctorListSerializer, DoctorDetailSerializer 

class DoctorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Doctor.objects.filter(is_active=True) # Активдүү дарыгерлерди гана көрсөтөт

    # ===== Бул функция эң негизгиси =====
    def get_serializer_class(self):
        # Эгер action 'list' болсо (тизмени сураса)
        if self.action == 'list':
            return DoctorListSerializer
        # Башка бардык учурларда (мисалы, бир даана дарыгерди сураса)
        return DoctorDetailSerializer